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
import { ThemeContext } from "../../Context/ThemeProvider";

export default function Home({ navigation }) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <View
      style={(styles.Container, { backgroundColor: theme.backgroundColor })}
    >
      <ScrollView
        style={{ paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
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
    flexDirection: "column",
    paddingBottom: Platform.OS === "ios" ? 30 : 50,
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
