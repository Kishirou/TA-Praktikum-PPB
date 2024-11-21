import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BusinessCard = ({ business, onPress }) => {
  if (!business) return null;
  return (
    <View style={styles.card}>
      <Text>{business.name || 'No Name'}</Text>
      <Text>{business.rating || 'No Rating'}</Text>
      <Text>{business.address || 'No Address'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  address: {
    fontSize: 12,
    color: '#666',
  },
});

export default BusinessCard;
