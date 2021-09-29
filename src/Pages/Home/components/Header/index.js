import React, { useContext } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { ThemeContext } from "../../../../Context/ThemeProvider";

const { width, height } = Dimensions.get("screen");
const imageWDark = width * 0.09;
const imageHDark = imageWDark * 1;
const imageWLight = width * 0.085;
const imageHLight = imageWLight * 1;

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const offSet = React.useRef(new Animated.Value(0)).current;

  const position = () => {
    toggleTheme();
    Animated.timing(offSet, {
      toValue: theme.toggleButton.buttonPosition,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        flex: 2,
        backgroundColor: "transparent",
        paddingHorizontal: 20,
        marginBottom: 20,
        width: width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          color: theme.titleColor,
          fontWeight: "500",
        }}
      >
        Olá, Lucas!
      </Text>
      <TouchableOpacity onPress={position}>
        <View
          style={{
            backgroundColor: theme.toggleButton.backgroundColor,
            width: 50,
            height: 25,
            borderRadius: 25,
            shadowColor: "#000",
            shadowOffset: {
              width: 5,
              height: 10,
            },
            shadowOpacity: 0.58,
            shadowRadius: 4.65,

            elevation: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Animated.View
            style={{
              backgroundColor: theme.toggleButton.button,
              width: 20,
              height: 20,
              borderRadius: 10,
              marginHorizontal: 2,
              position: "absolute",
              transform: [
                {
                  translateX: offSet.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 25],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
