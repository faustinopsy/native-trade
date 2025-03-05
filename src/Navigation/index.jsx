import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Carteira from '../pages/Carteira'
import { MaterialIcons } from "@expo/vector-icons"
import { AuthProvider } from './../services/AuthProvider';
const nav = false ? createDrawerNavigator() : createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <nav.Navigator initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Carteira") {
          iconName = "trending-up";
        } else if (route.name === "Sobre") {
          iconName = "school";
        }

        return <MaterialIcons name={iconName} size={30} color={color} />;
      },
      tabBarActiveTintColor: "teal",
      tabBarInactiveTintColor: "gray",
    })}>
      <nav.Screen name="Home" component={Home} />
      <nav.Screen name="Sobre" component={Sobre} />
      <nav.Screen name="Carteira" component={Carteira} />
    </nav.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
