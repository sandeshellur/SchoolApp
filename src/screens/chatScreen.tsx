import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;
    const userMessage = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    const response = await axios.post('https://api.example.com/chat', { query: input });
    const botMessage = { id: Date.now().toString(), text: response.data.reply, sender: 'bot' };
    setMessages((prev) => [...prev, botMessage]);

    setInput('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={item.sender === 'user' ? styles.userText : styles.botText}>{item.text}</Text>
        )}
      />
      <TextInput
        placeholder="Type a message"
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginVertical: 10 },
  userText: { alignSelf: 'flex-end', backgroundColor: '#d1f0ff', padding: 10, borderRadius: 5 },
  botText: { alignSelf: 'flex-start', backgroundColor: '#f1f1f1', padding: 10, borderRadius: 5 },
});
