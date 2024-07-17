import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have installed the `@expo/vector-icons` package

const messages = [
  {
    id: '1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '01:06 PM',
    seen: true,
  },
  {
    id: '2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '01:06 PM',
    seen: false,
  },
];

const Messages_detail = () => {
  const renderItem = ({ item }) => (
    <View style={item.seen ? styles.messageContainerSeen : styles.messageContainer}>
      <Text style={styles.messageText}>{item.text}</Text>
      <View style={styles.messageMeta}>
        {item.seen && <Text style={styles.seenText}>Seen</Text>}
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => alert('Go back')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Inbox</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
        <Text style={styles.profileName}>wireframnig</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={() => alert('Send message')}>
          <Ionicons name="send" size={24} color="black" />
        </TouchableOpacity>
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
    paddingTop: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
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
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageList: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  messageContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  messageContainerSeen: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  messageMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  seenText: {
    color: '#888',
    fontSize: 12,
  },
  messageTime: {
    color: '#888',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 10,
    marginRight: 10,
  },
};

export default Messages_detail;
