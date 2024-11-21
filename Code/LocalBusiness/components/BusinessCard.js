import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function BusinessCard({ business, onPress, onFavorite, isFavorite }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      {/* Business Image */}
      <Image source={{ uri: business.url }} style={styles.image} />

      {/* Business Content */}
      <View style={styles.content}>
        <Text style={styles.name}>{business.name}</Text>
        <Text style={styles.rating}>⭐ {business.rating}</Text>
        <Text style={styles.infotext} numberOfLines={2}>
          {business.address.streetAddress}, {business.address.addressLocality}, {business.address.addressRegion}
        </Text>
      </View>

      {/* Favorite Button */}
      <TouchableOpacity
        onPress={(e) => {
          e.stopPropagation(); // Prevent triggering the card's onPress
          onFavorite();
        }}
        style={styles.favoriteButton}
      >
        <FontAwesome
          name={isFavorite ? 'heart' : 'heart-o'}
          size={24}
          color="red"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    width: '48%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  description: {
    fontSize: 12,
    color: '#555',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10, // Ensure the button is above the card's touchable area
  },
});
