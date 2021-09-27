import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Categories from "./components/Categories";
import Popular from "./components/Popular";
import NewContent from "./components/NewContent";


export default function Home({ navigation }) {
  return (
    <View style={styles.Container}>
      <ScrollView style={{ paddingTop: 40 }}>
        <Header />
        <View style={styles.Body}>
          <SearchInput />
          <NewContent navigation={navigation} />
          <View>
            <Categories navigation={navigation} />
            <Popular navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#141834",
    flexDirection: "column",
    paddingBottom: Platform.OS === "ios" ? 0 : 50,
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
