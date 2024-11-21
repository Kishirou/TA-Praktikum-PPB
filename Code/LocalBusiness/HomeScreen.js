import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BusinessCard from '../components/BusinessCard'; // Ensure the path to BusinessCard is correct

const HomeScreen = () => {
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/businesses') // Replace with your IP
      .then((response) => response.json())
      .then((data) => {
        console.log('API Data:', data); // Check the structure
        setBusinesses(data);
      })
      .catch((error) => {
        console.error('Error fetching businesses:', error);
      });
  }, []);
  
  const renderCard = ({ item }) => (
    <BusinessCard
      business={item}
      onPress={() => console.log(`Pressed: ${item.name}`)} // Add navigation logic
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HOME</Text>
      {businesses.length === 0 ? (
        <Text style={styles.message}>No businesses found!</Text>
      ) : (
        <FlatList
          data={businesses}
          keyExtractor={(item) => item.id.toString()} // Ensure id exists and is unique
          renderItem={renderCard}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8e8fc',
    padding: 10,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#a3d4f7',
    color: '#fff',
  },
});

export default HomeScreen;
