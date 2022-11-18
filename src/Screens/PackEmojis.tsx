import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Pack from "../Components/Pack";

export default function PackEmojis() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Packs de emojis</Text>
      <View>
        <Pack namePack="pack0" />
        <Pack namePack="pack1" />
        <Pack namePack="pack2" />
        <Pack namePack="pack3" />
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
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fff",
  },
});
