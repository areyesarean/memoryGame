import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ButtonMenu from "../Components/ButtonMenu";

export default function Welcome() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juego de Memoria</Text>
      <View style={styles.containerButtons}>
        <ButtonMenu to="Payload" title="Jugar 😎" />
        <ButtonMenu to="Packs" title="Packs de emojis 🤩" />
        <ButtonMenu to="Scores" title="Tus puntuaciones 🤓" />
      </View>
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
  containerButtons: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "900",
  },
});
