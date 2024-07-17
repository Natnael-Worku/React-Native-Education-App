import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewsScreen = ({ item }) => {
  return (
    <View style={styles.container}>
      {[
        { name: 'Muhammad Arsalan', review: 'Great course!', rating: 5 },
        { name: 'Usman Diljan', review: 'Very informative.', rating: 4 },
        { name: 'Yasir Lashari', review: 'Loved the content.', rating: 5 }
      ].map((review, index) => (
        <View key={index} style={styles.review}>
          <Text>{review.name}</Text>
          <Text>{review.review}</Text>
          <Text>Rating: {review.rating}/5</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  review: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
});

export default ReviewsScreen;
