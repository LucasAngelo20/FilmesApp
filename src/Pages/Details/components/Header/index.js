import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

import {ThemeContext} from "../../../../Context/ThemeProvider"

const { width, height } = Dimensions.get("screen");
const imageW = width * 0.13;
const imageH = imageW * 1;

export default function Header({navigation}) {
  const {theme} = React.useContext(ThemeContext)
  return (
    <View
      style={{
        flexDirection: "row",
        width: width- 40,
        backgroundColor: "transparent",
        alignItems: "center",
        marginBottom: 40,
        marginTop: Platform.OS === "ios" ? 0 : 15,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../../../../../assets/keyboard-left-arrow-button_icon-icons.com_72692.png")}
          style={{
            tintColor: theme.titleColor,
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
      <Text style={[styles.Title, { color: theme.titleColor}]}>Detalhes</Text>
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
    fontSize: 26,
    position: "absolute",
    left: "37%",
  },
  Body: {
    flex: 12,
    backgroundColor: "transparent",
  },
});
