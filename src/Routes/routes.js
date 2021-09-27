import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import Explore from "../Pages/Explore";
import Favorites from "../Pages/Favorites";
import Profile from "../Pages/Profile";
import Popular from "../Pages/Popular";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import NewContent from "../Pages/Home/components/NewContent";
import BuyTicket from "../Pages/BuyTicket";

const Stack = createStackNavigator();

export function HomeScreen() {
  const navigatorOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "transparent" },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Popular" component={Popular} />
      <Stack.Screen name="NewContent" component={NewContent} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="BuyTicket" component={BuyTicket} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          height: "8%",
          borderTopWidth: 0,
          backgroundColor: "#141834",
          elevation: 0,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={
                  focused
                    ? require("../../assets/IconsTabBar/HomeFilled.png")
                    : require("../../assets/IconsTabBar/Home.png")
                }
                style={{
                  height: focused ? 30 : 25,
                  width: focused ? 30 : 25,
                  tintColor: focused ? "#536be0" : "#566075",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={
                  focused
                    ? require("../../assets/IconsTabBar/ExploreFilled.png")
                    : require("../../assets/IconsTabBar/Explore.png")
                }
                style={{
                  height: focused ? 30 : 25,
                  width: focused ? 30 : 25,
                  tintColor: focused ? "#536be0" : "#566075",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={
                  focused
                    ? require("../../assets/IconsTabBar/FavoritesFilled.png")
                    : require("../../assets/IconsTabBar/Favorites.png")
                }
                style={{
                  height: focused ? 30 : 25,
                  width: focused ? 30 : 25,
                  tintColor: focused ? "#536be0" : "#566075",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={
                  focused
                    ? require("../../assets/IconsTabBar/ProfileFilled.png")
                    : require("../../assets/IconsTabBar/Profile.png")
                }
                style={{
                  height: focused ? 32 : 30,
                  width: focused ? 32 : 30,
                  tintColor: focused ? "#536be0" : "#566075",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
