import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function BusinessCard({ business, onPress, onFavorite, isFavorite }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, isFavorite && styles.favoriteCard]}>
      {/* Business Image */}
      <Image
        source={{ uri: business.url || 'https://i.postimg.cc/VLJGMTRM/Kayamori-Ruka.jpg' }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Business Content */}
      <View style={styles.content}>
        <Text style={styles.name}>{business.name}</Text>
        <Text style={styles.rating}>⭐ {business.rating.toFixed(1)}</Text>
        <Text style={styles.infotext} numberOfLines={2}>
          {business.address.streetAddress}, {business.address.addressLocality}, {business.address.addressRegion}
        </Text>
      </View>

      {/* Favorite Button */}
      <TouchableOpacity
        onPress={(e) => {
          e.stopPropagation();
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
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#007BFF',
    marginBottom: 5,
  },
  infotext: {
    fontSize: 12,
    color: '#555',
    textAlign: 'justify',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
});
