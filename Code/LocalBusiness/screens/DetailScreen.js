import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {
  const { business } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Business Image */}
      <Image source={{ uri: business.url }} style={styles.image} />

      {/* Business Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{business.name}</Text>
        <Text style={styles.rating}>⭐ {business.rating}</Text>
        <Text style={styles.description}>{business.description}</Text>
        
        <Text style={styles.infoTitle}>Address</Text>
        <Text style={styles.infoText}>
          {business.address.streetAddress}, {business.address.addressLocality}, {business.address.addressRegion}
        </Text>

        <Text style={styles.infoTitle}>Owner</Text>
        <Text style={styles.infoText}>{business.owner}</Text>
      </View>

      {/* Review Section */}
      <View style={styles.reviewSection}>
        <Text style={styles.sectionTitle}>Review</Text>
        <View style={styles.reviewCard}>
          <Image
            source={{ uri: business.review?.reviewUserPhoto || 'https://via.placeholder.com/50' }}
            style={styles.reviewerImage}
          />
          <View style={styles.reviewContent}>
            <Text style={styles.reviewerName}>{business.review?.reviewUser || 'Anonymous'}</Text>
            <Text style={styles.reviewRating}>⭐ {business.review?.reviewScore}</Text>
            <Text style={styles.reviewComment} numberOfLines={4}>
              {business.review?.reviewComment || 'No reviews yet.'}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8e8fc',
  },
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    fontSize: 18,
    color: '#777',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  reviewSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  reviewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  reviewerImage: {
    width: 75,
    height: 75,
    borderRadius: 45,
    marginRight: 15,
    borderWidth: 3, 
    borderColor: '#007BFF',
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewRating: {
    fontSize: 16,
    color: '#007BFF',
    marginVertical: 5,
  },
  reviewComment: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    lineHeight: 20,
  },
});
