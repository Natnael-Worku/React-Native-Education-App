import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const CourseEnrolled = ({ navigation }) => {
  const [expandedChapters, setExpandedChapters] = useState([]);

  const toggleChapter = (index) => {
    setExpandedChapters((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Wireframing</Text>
          <View style={styles.rating}>
            {Array(5).fill().map((_, i) => (
              <FontAwesome key={i} name="star" size={16} color="purple" />
            ))}
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>
        <Text style={styles.author}>By Shoaib Hassan</Text>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>
      <TouchableOpacity style={styles.askButton}>
        <Text style={styles.askButtonText}>Ask question</Text>
      </TouchableOpacity>
      <View style={styles.ratingContainer}>
        <Text style={styles.rateTitle}>Rate This course</Text>
        <Text style={styles.rateSubtitle}>Tell others what you think about this course</Text>
        <View style={styles.stars}>
          {Array(5).fill().map((_, i) => (
            <FontAwesome key={i} name="star-o" size={24} color="purple" />
          ))}
        </View>
      </View>
      <View style={styles.chapterContainer}>
        {["What is Graphics Designing?", "What is Logo Designing?", "What is Poster Designing?", "What is Picture Editing?"].map((chapter, index) => (
          <View key={index} style={styles.chapter}>
            <TouchableOpacity style={styles.chapterHeader} onPress={() => toggleChapter(index)}>
              <Text style={styles.chapterTitle}>{`Chapter ${index + 1}: ${chapter}`}</Text>
              <AntDesign name={expandedChapters.includes(index) ? "up" : "down"} size={24} color="black" />
            </TouchableOpacity>
            {expandedChapters.includes(index) && (
              <View style={styles.chapterContent}>
                {Array(3).fill().map((_, idx) => (
                  <View key={idx} style={styles.lesson}>
                    <Feather name="play" size={24} color="blue" />
                    <Text style={styles.lessonText}>Lorem ipsum dolor sit amet consectetur.</Text>
                    <MaterialCommunityIcons name="download" size={24} color="black" />
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 4,
  },
  author: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 16,
  },
  progress: {
    width: '45%',
    height: '100%',
    backgroundColor: 'purple',
  },
  askButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  askButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  ratingContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  rateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rateSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  stars: {
    flexDirection: 'row',
  },
  chapterContainer: {
    marginBottom: 16,
  },
  chapter: {
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 8,
  },
  chapterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chapterContent: {
    marginTop: 8,
  },
  lesson: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  lessonText: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default CourseEnrolled;
