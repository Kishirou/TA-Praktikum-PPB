import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackNavigator({ favorites, setFavorites }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        children={() => (
          <HomeScreen favorites={favorites} setFavorites={setFavorites} />
        )}
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: '#007BFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Detail',
          headerStyle: { backgroundColor: '#007BFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

function FavoriteStackNavigator({ favorites }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        children={() => <FavoriteScreen favorites={favorites} />}
        options={{
          title: 'Favorites',
          headerStyle: { backgroundColor: '#007BFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Detail',
          headerStyle: { backgroundColor: '#007BFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  const [favorites, setFavorites] = useState([]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'FavoritesTab') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="HomeTab"
        children={() => (
          <HomeStackNavigator favorites={favorites} setFavorites={setFavorites} />
        )}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Tab.Screen
        name="FavoritesTab"
        children={() => <FavoriteStackNavigator favorites={favorites} />}
        options={{ headerShown: false, title: 'Favorites' }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
          headerStyle: { backgroundColor: '#007BFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerStyle: { backgroundColor: '#007BFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}
