import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Header from "./Components/Header";

const { width, height } = Dimensions.get("screen");

export default function BuyTicket({ navigation, route }) {
  const movie = route.params.movie;
  const places = movie.Places;
  return (
    <View style={styles.Container}>
      <Header navigation={navigation} />
      <View style={styles.Body}>
        <View style={styles.Places}>
          {places.map((item, index) => (
            <View
            key={`code-${index}`}
              style={{ width: 10, height: 10, backgroundColor: "yellow" }}
            ><Text>{item.code}</Text></View>
          ))}
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
    alignItems: "center",
  },
  Body: {
    flex: 1, 
  },
  Places: {
    width: width * 1.5,
    height: height * 0.5,
    backgroundColor: 'yellow'
  },
});
