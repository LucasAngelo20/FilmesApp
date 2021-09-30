import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
} from "react-native";

import StarRating from "./StartRating/index";

import Data from "../../../../Data/data.json";

import { ThemeContext } from "../../../../Context/ThemeProvider";

const { width, height } = Dimensions.get("screen");
const posterW = width * 0.5;
const posterH = posterW * 1.3;

export default function Popular({ navigation }) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 100,
        flexDirection: "column",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: width - 50,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 22, color: theme.titleColor }}>Popular</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Popular")}>
          <Text style={{ fontSize: 14, color: "#888" }}>Ver Mais</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={Data.Movies}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal: 15,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { movie: item })}
              activeOpacity={0.9}
              style={{
                marginTop: 20,
                marginHorizontal: 15,
                alignItems: "center"
              }}
            >
              <Image
                source={{ uri: item.url }}
                style={{
                  width: posterW,
                  height: posterH,
                  borderRadius: 30,
                  zIndex: 2,
                }}
              />
              <View style={styles.BackPoster} />
              <View style={styles.BackPoster2} />
              <Text
                style={{
                  fontSize: 20,
                  color: theme.titleColor,
                  marginTop: 20,
                  marginLeft: 5,
                  width: 200,
                  height: 30,
                }}
              >
                {item.Title.length > 15
                  ? item.Title.substring(0, 20 - 3) + "..."
                  : item.Title}
              </Text>
              <StarRating />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BackPoster: {
    backgroundColor: "#BABED1",
    position: "absolute",
    marginTop: 7,
    height: posterH,
    width: posterW - 15,
    borderRadius: 30,
    zIndex: 1,
    opacity: 0.5,
  },
  BackPoster2: {
    backgroundColor: "#4F526A",
    position: "absolute",
    marginTop: 14,
    height: posterH,
    width: posterW - 35,
    borderRadius: 30,
    opacity: 0.5,
  },
});
