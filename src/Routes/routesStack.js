import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../Pages/Categories";
import Popular from "../Pages/Popular";
import Details from "../Pages/Details";
import Home from "../Pages/Home";

const Stack = createNativeStackNavigator();

export function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Popular" component={Popular} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
