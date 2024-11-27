import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function AuthNavigator({ setIsLoggedIn }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        children={() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
