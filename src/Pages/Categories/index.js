import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import {ThemeContext} from '../../Context/ThemeProvider'

export default function Categories({ navigation }) {
  const {theme} = React.useContext(ThemeContext);
  return (
    <View
      style={[styles.Container, { backgroundColor: theme.backgroundColor }]}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: "5%", left: "5%" }}
      >
        <Image
          source={require("../../../assets/keyboard-left-arrow-button_icon-icons.com_72692.png")}
          style={{
            tintColor: "#fff",
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.Title}>Categories Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
