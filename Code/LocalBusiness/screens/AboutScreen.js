import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>LocalBusiness App</Text>
        <Text style={styles.text}>
          LocalBusiness is a simple app to discover and explore businesses in your area. 
          Built with React Native and Expo, this app provides easy navigation and detailed 
          information about local businesses. Whether you're looking for cafes, bakeries, 
          or shops, LocalBusiness helps you find and connect with them effortlessly.
        </Text>
        <Text style={styles.text}>
          Features include:
        </Text>
        <Text style={styles.listItem}>• Browse and explore businesses near you</Text>
        <Text style={styles.listItem}>• Add businesses to your favorites</Text>
        <Text style={styles.listItem}>• View detailed business information</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8e8fc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#555',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 5,
  },
});
