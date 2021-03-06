import React from "react";
import { View, TextInput, Image, Dimensions } from "react-native";
import { ThemeContext } from "../../../../Context/ThemeProvider";

const { width, height } = Dimensions.get("screen");

export default function SearchInput() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <View
      style={{
        borderColor: "rgba(130, 130, 130,0.2)",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: "center",
        flexDirection: "row",
        width: width - 50,
        alignSelf: "center",
        marginBottom: 30,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Image
        source={require("../../../../../assets/SearchIcon.png")}
        style={{ height: 20, width: 20, tintColor: "#566075", marginRight: 20 }}
      />
      <TextInput
        placeholder="Procure um filme"
        style={{ color: "#566075", fontSize: 16, width: "100%" }}
        placeholderTextColor="#566075"
      />
    </View>
  );
}
