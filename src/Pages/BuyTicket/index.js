import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Components/Header";

export default function BuyTicket({ navigation }) {
  return (
    <View style={styles.Container}>
      <Header />
      <View>
        <View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#141834",
    paddingTop: 50,
  },
});
