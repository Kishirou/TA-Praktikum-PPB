import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import BusinessCard from '../components/BusinessCard';

export default function HomeScreen({ favorites, setFavorites }) {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigation = useNavigation(); // Access navigation

  useEffect(() => {
    // Fetch businesses from the API
    fetch('http://localhost:3000/businesses') // Replace localhost with your machine's IP if using a physical device
      .then((response) => response.json())
      .then((data) => {
        setBusinesses(data);
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

  if (loading) {
    // Show a loading indicator while data is being fetched
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={businesses}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <BusinessCard
            business={item}
            onPress={() => navigation.navigate('Detail', { business: item })} // Navigate to DetailScreen
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
    backgroundColor: '#d8e8fc' 
  },
  listContent: { 
    padding: 10 
  },
  columnWrapper: { 
    justifyContent: 'space-between' 
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
