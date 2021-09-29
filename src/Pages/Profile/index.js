import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { ThemeContext } from "../../Context/ThemeProvider";

export default function Profile() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <View
      style={[styles.Container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.Title, { color: theme.titleColor }]}>Profile screen</Text>
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
    fontSize: 34,
  },
  Body: {
    flex: 12,
    backgroundColor: "transparent",
  },
});
