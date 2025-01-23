import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppNavigation from './src/navigation/appNavigation';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [role, setRole] = useState<'teacher' | 'student' | null>(null);

  const renderRoleSelection = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <Button title="Teacher" onPress={() => setRole('teacher')} />
      <Button title="Student" onPress={() => setRole('student')} />
    </View>
  );

  return (
    <PaperProvider>
      {role ? (
        // Pass the role to AppNavigation
        <AppNavigation role={role} />
      ) : (
        renderRoleSelection()
      )}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
