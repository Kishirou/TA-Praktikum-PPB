import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  content: {
    alignItems: 'center', // Centers content within this View horizontally
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
});
