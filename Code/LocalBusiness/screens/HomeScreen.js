import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BusinessCard from '../components/BusinessCard';

export default function HomeScreen({ favorites, setFavorites }) {
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://192.168.1.7:3000/businesses')
      .then((response) => response.json())
      .then((data) => {
        setBusinesses(data);
        setFilteredBusinesses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching businesses:', error);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (business) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === business.id)
        ? prev.filter((fav) => fav.id !== business.id) 
        : [...prev, business]
    );
  };

  const Search = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredBusinesses(businesses);
    } else {
      const filtered = businesses.filter((business) =>
        business.name.toLowerCase().includes(query.toLowerCase()) 
      );
      setFilteredBusinesses(filtered);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search businesses..."
        value={searchQuery}
        onChangeText={Search} 
      />

      <FlatList
        data={filteredBusinesses}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <BusinessCard
            business={item}
            onPress={() => navigation.navigate('Detail', { business: item })}
            isFavorite={favorites.some((fav) => fav.id === item.id)}
            onFavorite={() => toggleFavorite(item)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8e8fc',
  },
  searchBar: {
    height: 40,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  listContent: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
