import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SharedStackNavigator({ favorites, setFavorites }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        children={() => (
          <HomeScreen favorites={favorites} setFavorites={setFavorites} />
        )}
        options={{
          title: 'HOME',
          headerStyle: {
            backgroundColor: '#007BFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'DETAIL',
          headerStyle: {
            backgroundColor: '#007BFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Favorites"
        children={() => <FavoriteScreen favorites={favorites} />}
        options={{
          title: 'FAVORITES',
          headerStyle: {
            backgroundColor: '#007BFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
export default function MainNavigator() {
  const [favorites, setFavorites] = useState([]); // State to store favorites

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        children={() => (
          <SharedStackNavigator favorites={favorites} setFavorites={setFavorites} />
        )}
        options={{ headerShown: false, title: 'HOME' }}
      />
      <Tab.Screen
        name="Favorites"
        children={() => <FavoriteScreen favorites={favorites} />}
        options={{
          title: 'FAVORITES',
          headerStyle: {
            backgroundColor: '#007BFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'ABOUT',
          headerStyle: {
            backgroundColor: '#007BFF', // Blue header background
          },
          headerTintColor: '#fff', // White text for the header
          headerTitleStyle: {
            fontWeight: 'bold', // Bold header title
            fontSize: 24,
          },
          headerTitleAlign: 'center', // Centers the title in the header
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'PROFILE',
          headerStyle: {
            backgroundColor: '#007BFF', // Blue header background
          },
          headerTintColor: '#fff', // White text for the header
          headerTitleStyle: {
            fontWeight: 'bold', // Bold header title
            fontSize: 24,
          },
          headerTitleAlign: 'center', // Centers the title in the header
        }}
      />
    </Tab.Navigator>
  );
}
