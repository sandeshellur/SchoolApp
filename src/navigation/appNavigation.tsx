import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TeacherHomeScreen from '../screens/teacherHomeScreen';
import StudentHomeScreen from '../screens/studentHomeScreen';
import ChatScreen from '../screens/chatScreen';

const Stack = createStackNavigator();

export default function AppNavigation({ role }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {role === 'teacher' ? (
          <Stack.Screen name="TeacherHome" component={TeacherHomeScreen} options={{ title: 'Teacher Dashboard' }} />
        ) : (
          <Stack.Screen name="StudentHome" component={StudentHomeScreen} options={{ title: 'Student Dashboard' }} />
        )}
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
