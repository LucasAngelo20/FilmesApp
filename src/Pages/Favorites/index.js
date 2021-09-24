import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Favorites() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Favorites screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#141834",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    color: "#fff",
    fontSize: 34,
  },
  Body: {
    flex: 12,
    backgroundColor: "transparent",
  },
});