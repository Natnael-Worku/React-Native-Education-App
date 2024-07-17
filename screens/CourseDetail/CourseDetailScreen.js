import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CourseDetailTabs from "./CourseDetailTabs";

const CourseDetailScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>By {item.author}</Text>
        {/* <Text style={styles.progress}>Progress: {item.progress}%</Text> */}
      </View>
      <CourseDetailTabs route={route} />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('CourseEnrolled')}
      >
        <Text style={styles.buttonText}>Get Enroll</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  author: {
    fontSize: 18,
    color: "gray",
  },
  progress: {
    fontSize: 16,
    color: "blue",
  },
  button: {
    backgroundColor: "#8A56C2",
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CourseDetailScreen;
