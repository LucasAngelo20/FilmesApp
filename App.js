import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

import Routes from "./src/Routes/routes";
import { ThemeContext, ThemeProvider } from "./src/Context/ThemeProvider";

function App() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme.statusBar.barStyle}
        backgroundColor={theme.statusBar.backgroundColor}
      />
      <Routes />
    </NavigationContainer>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
