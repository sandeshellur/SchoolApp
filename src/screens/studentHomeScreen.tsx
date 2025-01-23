import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { timetables } from '../data/mockData';

export default function StudentHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Timetable</Text>
      <FlatList
        data={timetables.student}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{`${item.subject} - ${item.time} on ${item.date}`}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold' },
});
