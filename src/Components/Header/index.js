import React from "react";
import { View, Text, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("screen");
const imageW = width * 0.13;
const imageH = imageW * 1;

export default function Header() {
  return (
    <View
      style={{
        flex: 2,
        backgroundColor: "transparent",
        paddingHorizontal: 20,
        width: width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 28, color: "#fff", fontWeight: "500" }}>
        Olá, Lucas!
      </Text>
      <Image
        source={require("../../../assets/download.png")}
        style={{ width: imageW, height: imageH, borderRadius: "50%" }}
      />
    </View>
  );
}
