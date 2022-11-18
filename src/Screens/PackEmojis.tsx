import { View, Text, StyleSheet } from "react-native";
import React from "react";

const cardsB0: string[] = ["😎", "🎉", "🎶", "🎈", "🎁", "⚽"];
const cardsB1: string[] = ["🤩", "🌍", "🛩", "☀", "🎅", "🎃"];

export default function PackEmojis() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Packs de emojis</Text>
      <View>
        <View style={styles.containerPack}>
          {cardsB0.map((emoji, index) => {
            return (
              <Text style={styles.emoji} key={index}>
                {emoji}
              </Text>
            );
          })}
        </View>
        <View style={styles.containerPack}>
          {cardsB1.map((emoji, index) => {
            return (
              <Text style={styles.emoji} key={index}>
                {emoji}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#072a42",
  },
  containerPack: {
    flexDirection: "row",
    marginBottom: 20
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fff",
  },
  emoji: {
    fontSize: 40,
  },
});
