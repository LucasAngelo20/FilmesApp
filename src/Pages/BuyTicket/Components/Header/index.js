import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const { width, height } = Dimensions.get("screen");
const imageW = width * 0.13;
const imageH = imageW * 1;

export default function Header({navigation}) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: width- 40,
        backgroundColor: "transparent",
        alignItems: "center",
        marginBottom: 40
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../../../../../assets/keyboard-left-arrow-button_icon-icons.com_72692.png")}
          style={{
            tintColor: "#fff",
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.Title}>Comprar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#141834",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    color: "#fff",
    fontSize: 26,
    position: "absolute",
    left: "37%",
  },
  Body: {
    flex: 12,
    backgroundColor: "transparent",
  },
});
