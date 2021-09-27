import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";

import Header from "./components/Header";

//Conteúdo
const { width, height } = Dimensions.get("screen");
const imageW = width * 0.7;
const imageH = imageW * 1.5;

export default function Details({ navigation, route }) {
  const movie = route.params.movie;
  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity
        style={styles.BuyButton}
        onPress={() => navigation.navigate("BuyTicket")}
      >
        <Text style={styles.BuyButtonText}>Comprar ticket</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.FavoriteButton}
        onPress={() => console.log("Alterado")}
      >
        <Image
          source={require("../../../assets/IconsTabBar/Favorites.png")}
          style={{ height: 25, width: 25, tintColor: "#fff" }}
        />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: Platform.OS === "ios" ? 0 : 20,
          paddingBottom: Platform.OS === "ios" ? 0 : 70,
        }}
      >
        <Header navigation={navigation} />
        <View style={styles.Body}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: movie.url }}
              style={{
                width: imageW,
                height: imageH,
                borderRadius: 30,
                zIndex: 2,
              }}
            />
            <View style={styles.BackPoster} />
            <View style={styles.BackPoster2} />
          </View>
          <View>
            <Text style={styles.MovieTitle}>{movie.Title}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            <Text style={styles.Author}>
              Diretor: {movie.Author} | {movie.Rating}
            </Text>
            <Image
              source={require("../../../assets/star_77949.png")}
              style={{ height: 18, width: 18 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: movie.Genres.length > 5 ? 10 : 0,
            }}
          >
            <FlatList
              data={movie.Genres}
              key={(item) => `${item.id}`}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={movie.Genres.length > 5 ? true : false}
              horizontal
              renderItem={({ item }) => (
                <View style={[styles.GenresContainer]}>
                  <Text style={styles.Genres}>{item}</Text>
                </View>
              )}
            />
          </View>
          <View style={styles.Sinopse}>
            <Text style={styles.SinopseTitle}>Sinopse</Text>
            <Text style={styles.SinopseContent}>{movie.Synopsis}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#141834",
    flexDirection: "column",
    paddingTop: Platform === "ios" ? 0 : 30,
    paddingBottom: Platform === "ios" ? 0 : 85,
  },
  Title: {
    color: "#fff",
    fontSize: 34,
  },
  Body: {
    backgroundColor: "transparent",
    width: width - 60,
  },
  BackPoster: {
    backgroundColor: "#BABED1",
    position: "absolute",
    marginTop: 10,
    height: imageH,
    width: imageW - 15,
    borderRadius: 30,
    zIndex: 1,
    opacity: 0.5,
  },
  BackPoster2: {
    backgroundColor: "#4F526A",
    position: "absolute",
    marginTop: 17,
    height: imageH,
    width: imageW - 35,
    borderRadius: 30,
    opacity: 0.5,
  },
  MovieTitle: {
    fontSize: 26,
    fontWeight: "600",
    color: "#fff",
    marginTop: 55,
  },
  Author: {
    fontSize: 20,
    color: "#ddd",
    marginTop: 10,
    marginRight: 5,
    paddingBottom: 1,
  },
  StarRating: {
    height: 50,
    width: 50,
  },
  Genres: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 12,
  },
  GenresContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 30,
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
    marginRight: 10,
    padding: 9,
  },
  SinopseTitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "#fff",
  },
  Sinopse: {
    marginTop: 20,
  },
  SinopseContent: {
    fontSize: 20,
    marginTop: 20,
    color: "#aaa",
    fontWeight: "300",
    textAlign: "left",
  },
  BuyButton: {
    backgroundColor: "#536be0",
    width: width - 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: "13%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    zIndex: 2,
  },
  BuyButtonText: {
    color: "#fff",
    textTransform: "uppercase",
  },
  FavoriteButton: {
    backgroundColor: "#4F526A",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    bottom: "13%",
    left: "10%",
    zIndex: 2,
  },
});
