import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, maxValue = 100 }) => {
  // Calculate width of the filled part
  const filledWidth = Math.min((progress / maxValue) * 100, 100);

  return (
    <View style={styles.container}>
      <View style={[styles.filled, { width: `${filledWidth}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 8,
    overflow: 'hidden',
  },
  filled: {
    backgroundColor: '#8A56C2',
    height: 20,
  },
});

export default ProgressBar;
