import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";

const { width, height } = Dimensions.get("screen");
const emojiWidth = width / 5.5;

export default function Categories({navigation}) {
  return (
    <View
      style={{
        flexDirection: "column",
        width: width,
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: width - 50,
          alignSelf: 'center'
        }}
      >
        <Text style={{ fontSize: 22, color: "#fff" }}>Categorias</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Text style={{ fontSize: 14, color: "#888" }}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={{
            width: emojiWidth,
            height: 90,
            borderRadius: 22,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e2138",
          }}
        >
          <Image
            source={require("../../../../../assets/face-screaming-in-fear_1f631.png")}
            style={{ height: 30, width: 30, marginBottom: 7 }}
          />
          <Text style={{ color: "#fff", fontSize: 12 }}>Terror</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: emojiWidth,
            height: 90,
            borderRadius: 22,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e2138",
          }}
        >
          <Image
            source={require("../../../../../assets/smiling-face-with-hearts_1f970.png")}
            style={{ height: 30, width: 30, marginBottom: 7 }}
          />
          <Text style={{ color: "#fff", fontSize: 12 }}>Romance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: emojiWidth,
            height: 90,
            borderRadius: 22,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e2138",
          }}
        >
          <Image
            source={require("../../../../../assets/zany-face_1f92a.png")}
            style={{ height: 30, width: 30, marginBottom: 7 }}
          />
          <Text style={{ color: "#fff", fontSize: 12 }}>Comédia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: emojiWidth,
            height: 90,
            borderRadius: 22,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e2138",
          }}
        >
          <Image
            source={require("../../../../../assets/star-struck_1f929.png")}
            style={{ height: 30, width: 30, marginBottom: 7 }}
          />
          <Text style={{ color: "#fff", fontSize: 12 }}>Drama</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
