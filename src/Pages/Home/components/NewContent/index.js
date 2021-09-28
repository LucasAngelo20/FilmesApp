import React from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Data from "../../../../Data/data.json";

const { width, height } = Dimensions.get("screen");
const imageW = width * 0.9;
const imageH = imageW * 0.5;

const Movies = Data.Movies;

export default function NewContent({navigation}) {
  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  const dotPosition = Animated.divide(newSeasonScrollX, width);

  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.Title}>Novo conteúdo</Text>
      </View>
      <Animated.FlatList
        data={Movies}
        key={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: newSeasonScrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => navigation.navigate('Details', {movie: item})}
            style={{ width, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={{ uri: item.Poster }}
              style={{ height: imageH, width: imageW, borderRadius: 20 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Movies.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dorWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [6, 20, 6],
            extrapolate: "clamp",
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ["grey", "#536be0", "grey"],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                borderRadius: 3,
                marginHorizontal: 3,
                width: dorWidth,
                height: 6,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 20,
  },
  Title: {
    color: "#ddd",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    width: width - 40,
    alignSelf: "center",
  },
});
