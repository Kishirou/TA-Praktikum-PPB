import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BusinessCard from '../components/BusinessCard';

export default function FavoriteScreen({ favorites }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavorites}>No favorite businesses yet!</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <BusinessCard
              business={item}
              onPress={() => navigation.navigate('Detail', { business: item })}
              isFavorite={true}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8e8fc',
  },
  noFavorites: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  listContent: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
