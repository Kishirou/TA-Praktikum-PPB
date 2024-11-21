import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://i.postimg.cc/VLJGMTRM/Kayamori-Ruka.jpg',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Kayamori Ruka</Text>
        <Text style={styles.info}>Email: rukakayamori@kawaii.com</Text>
        <Text style={styles.info}>Phone: 0123456789</Text>
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
    maxWidth: 400, // Limit the card width for larger screens
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3, // Adds a border
    borderColor: '#007BFF', // Border color to match theme
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});
