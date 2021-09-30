import React from "react";
import { View, Image, Dimensions, Animated, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/native-stack";

import Explore from "../Pages/Explore";
import Favorites from "../Pages/Favorites";
import Profile from "../Pages/Profile";
import Popular from "../Pages/Popular";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import NewContent from "../Pages/Home/components/NewContent";
import BuyTicket from "../Pages/BuyTicket";
import Categories from "../Pages/Categories";
import { ThemeContext } from "../Context/ThemeProvider";

const Stack = createNativeStackNavigator();

const { width, height } = Dimensions.get("screen");

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Popular" component={Popular} />
      <Stack.Screen name="NewContent" component={NewContent} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="BuyTicket" component={BuyTicket} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function Tabs() {
  const { theme } = React.useContext(ThemeContext);
  const tabOffsetValue = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            height: Platform.OS === "ios" ? "9%" : "7%",
            borderTopWidth: 0,
            backgroundColor: theme.backgroundColor,
            elevation: 0,
            paddingBottom: Platform.OS === "ios" ? 40 : 20,
          },
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
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
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 0,
                useNativeDriver: true,
              }).start();
            },
          })}
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
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 20,
                useNativeDriver: true,
              }).start();
            },
          })}
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
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 40,
                useNativeDriver: true,
              }).start();
            },
          })}
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
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 60,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          backgroundColor: "#536be0",
          height: 5,
          width: getWidth(),
          borderRadius: 2.5,
          position: "absolute",
          bottom: Platform.OS === "ios" ? 30 : 15,
          left: width * 0.12,
          transform: [{ translateX: tabOffsetValue }],
        }}
      />
    </>
  );
}
function getWidth() {
  let width = Dimensions.get("window").width;

  width = width * 0.05;

  return width / 4;
}
