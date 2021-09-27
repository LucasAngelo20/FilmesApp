import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import 'react-native-gesture-handler';

import Routes from "./src/Routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' color='#141834' />
      <Routes />
    </NavigationContainer>
  );
}
