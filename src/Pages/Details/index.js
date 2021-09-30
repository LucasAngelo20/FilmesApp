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
import { ThemeContext } from "../../Context/ThemeProvider";

//Conteúdo
const { width, height } = Dimensions.get("screen");
const imageW = width * 0.7;
const imageH = imageW * 1.5;

export default function Details({ navigation, route }) {
  const { theme } = React.useContext(ThemeContext);
  const movie = route.params.movie;
  return (
    <SafeAreaView
      style={[styles.Container, { backgroundColor: theme.backgroundColor }]}
    >
      <TouchableOpacity
        style={styles.BuyButton}
        onPress={() => navigation.navigate("BuyTicket", { movie: movie })}
      >
        <Text style={styles.BuyButtonText}>Comprar ticket</Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: Platform.OS === "ios" ? width * 0.15 : width * 0.22,
        }}
        showsVerticalScrollIndicator={false}
        bounces={true}
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
            <Text style={[styles.MovieTitle, {color: theme.titleColor}]}>{movie.Title}</Text>
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
              keyExtractor={(item, index) => `${index}`}
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
    fontSize: width * 0.06,
    fontWeight: "600",
    color: "#fff",
  },
  Sinopse: {
    marginTop: 20,
  },
  SinopseContent: {
    fontSize: width * 0.05,
    marginTop: width * 0.05,
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
    bottom: width * 0.06,
    borderRadius: 20,
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
    bottom: "3%",
    left: "10%",
    zIndex: 2,
  },
});
