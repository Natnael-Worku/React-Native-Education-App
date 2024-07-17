import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OverviewScreen = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
      </Text>
      <View style={styles.infoContainer}>
        <Text>80+ Lectures</Text>
        <Text>Certificate</Text>
        <Text>8 Weeks</Text>
        <Text>Mentor Available</Text>
      </View>
      <View style={styles.skillsContainer}>
        <Text>Skills:</Text>
        <View style={styles.skills}>
          {['Adobe', 'Photoshop', 'Logo Designing', 'Figma'].map((skill, index) => (
            <Text key={index} style={styles.skill}>{skill}</Text>
          ))}
        </View>
      </View>
      {/* <Button title="Get Enroll" onPress={() => {}} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  description: {
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  skillsContainer: {
    marginBottom: 20,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    margin: 4,
    padding: 4,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
});

export default OverviewScreen;
