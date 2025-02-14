// Navigation.js

import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//All screens to be imported
import TodoScreen from '../screens/TodoScreen';
import FocusScreen from '../screens/FocusScreen';
import JournalScreen from '../screens/JournalScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LofiScreen from '../screens/LofiScreen';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/settings/ProfileScreen'; // Import ProfileScreen

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [initialRoute, setInitialRoute] = useState('Login'); // Default to 'Login'

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // If the user is logged in, set initial route to 'Todo'
        setInitialRoute('Todo');
      } else {
        // If the user is not logged in, set initial route to 'Login'
        setInitialRoute('Login');
      }
    });

    return unsubscribe; // Cleanup subscription
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="Focus" component={FocusScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Lofi" component={LofiScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
