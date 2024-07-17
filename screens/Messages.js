import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have installed the `@expo/vector-icons` package
import { useNavigation } from '@react-navigation/native'; // Ensure you have installed `@react-navigation/native`

const dummy_data = [
  {
    id: '1',
    title: 'Graphics design',
    message: "Hi, How's you? How's everything?",
    time: '01:06 PM',
    avatar: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    id: '2',
    title: 'Website Design',
    message: "Hi, How's you? How's everything?",
    time: '01:06 PM',
    avatar: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    id: '3',
    title: 'Wireframing',
    message: "Hi, How's you? How's everything?",
    time: '01:06 PM',
    avatar: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
];

const Messages = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.replace('Messages_detail')}>
        <View style={styles.messageContainer}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.messageContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    );

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => alert('Go back')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Here"
        />
        <Button title="Search" onPress={() => alert('Search pressed')} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummy_data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
      />
      <View style={styles.footer}>
        <View style={styles.icon}></View>
        <View style={styles.icon}></View>
        <View style={styles.icon}></View>
        <View style={styles.icon}></View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20, // Adjust padding as needed
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#888',
  },
  time: {
    color: '#888',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: '#ccc',
    borderRadius: 15,
  },
};

export default Messages;
