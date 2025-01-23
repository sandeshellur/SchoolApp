import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import { timetables, courses } from '../data/mockData';

export default function TeacherHomeScreen({ navigation }) {
  const [newTimetable, setNewTimetable] = useState({ subject: '', time: '', date: '' });

  const addTimetable = () => {
    timetables.teacher.push({ id: Date.now().toString(), ...newTimetable });
    setNewTimetable({ subject: '', time: '', date: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Timetable</Text>
      <FlatList
        data={timetables.teacher}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{`${item.subject} - ${item.time} on ${item.date}`}</Text>
        )}
      />
      <TextInput
        placeholder="Subject"
        value={newTimetable.subject}
        onChangeText={(text) => setNewTimetable({ ...newTimetable, subject: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Time"
        value={newTimetable.time}
        onChangeText={(text) => setNewTimetable({ ...newTimetable, time: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Date"
        value={newTimetable.date}
        onChangeText={(text) => setNewTimetable({ ...newTimetable, date: text })}
        style={styles.input}
      />
      <Button title="Add Timetable" onPress={addTimetable} />
      <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold' },
  input: { borderBottomWidth: 1, marginVertical: 10 },
});
