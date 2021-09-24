import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {HomeScreen} from "./routeStack";
import Explore from "../Pages/Explore";
import Favorites from "../Pages/Favorites";
import Profile from "../Pages/Profile";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          height: 100,
          borderTopWidth: 0,
          backgroundColor: "transparent",
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
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
