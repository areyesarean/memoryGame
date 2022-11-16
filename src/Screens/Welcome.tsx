import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const cardsB: string[] = ["😎", "🎉", "🎶", "🎈", "🎁", "⚽"];
const cardsB1: string[] = ["🤩", "🌍", "🛩", "☀", "🎅", "🎃"];

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juego de Memoria</Text>
      {/* <Text style={styles.textSmall}>Selecciona un pack de emojis</Text> */}
      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => navigation.navigate("Payload" as never)}
      >
        <Text style={styles.textButton}>Jugar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#072a42",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "900",
  },
  resetButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#0f67a1",
    backgroundColor: "#093e61",
  },
  textButton: {
    color: "#05eeff",
    fontSize: 30,
    fontWeight: "800",
  },
  textSmall: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "800",
  },
});
