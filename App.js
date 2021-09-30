import React from "react";
import { StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

import Routes from "./src/Routes/routes";
import { ThemeContext, ThemeProvider } from "./src/Context/ThemeProvider";

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={Platform === "ios" ? true : false} />
      <Routes />
    </NavigationContainer>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
