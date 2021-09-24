import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Categories from "./components/Categories";
import Popular from "./components/Popular";

export default function Home({ navigation }) {
  return (
    <View style={styles.Container}>
      <Header />
      <View style={styles.Body}>
        <SearchInput />
        <View>
          <Categories navigation={navigation} />
          <Popular navigation={navigation} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#141834",
    flexDirection: "column",
    paddingBottom: Platform.OS === 'ios' ? 0 : 50
  },
  Title: {
    color: "#fff",
    fontSize: 34,
  },
  Body: {
    flex: 12,
    backgroundColor: "transparent",
  },
});
