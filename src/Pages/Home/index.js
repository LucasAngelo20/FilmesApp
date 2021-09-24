import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Header from "../../Components/Header";
import SearchInput from "../../Components/SearchInput";
import Categories from "../../Components/Categories";
import Popular from "../../Components/Popular";

export default function Home({ navigation }) {
  return (
    <View style={styles.Container}>
      <Header />
      <View style={styles.Body}>
        <SearchInput />
        <View>
          <Categories navigation={navigation} />
          <Popular />
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
