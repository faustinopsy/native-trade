import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'

const nav = true ? createDrawerNavigator() : createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <nav.Navigator initialRouteName="Home">
      <nav.Screen name="Home" component={Home} />
      <nav.Screen name="Sobre" component={Sobre} />
      <nav.Screen name="Contato" component={Contato} />
    </nav.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
