import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

import StarRating from "../StartRating/index";

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
        <Text
          style={{ fontSize: 22, color: theme === "dark" ? "#fff" : "#141834" }}
        >
          Popular
        </Text>
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
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,

                elevation: 5,
              }}
            >
              <Image
                source={{ uri: item.url }}
                style={{ width: posterW, height: posterH, borderRadius: 30 }}
              />

              <Text
                style={{
                  fontSize: 20,
                  color: theme === "dark" ? "#ddd" : "#141834",
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
