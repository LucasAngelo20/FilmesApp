import React from "react";
import { View, Text, Image } from "react-native";

export default function StarRating() {
  return (
    <View style={{flexDirection: 'row', marginLeft: 5, marginTop: 10}}>
      <Image
        source={require("../../../../../../assets/star_77949.png")}
        style={{ width: 15, height: 15, marginRight: 10 }}
      />
      <Image
        source={require("../../../../../../assets/star_77949.png")}
        style={{ width: 15, height: 15, marginRight: 10 }}
      />
      <Image
        source={require("../../../../../../assets/star_77949.png")}
        style={{ width: 15, height: 15, marginRight: 10 }}
      />
      <Image
        source={require("../../../../../../assets/star_77949.png")}
        style={{ width: 15, height: 15, marginRight: 10 }}
      />
      <Image
        source={require("../../../../../../assets/star_77949.png")}
        style={{ width: 15, height: 15, marginRight: 10, tintColor: '#ddd' }}
      />
    </View>
  );
}
