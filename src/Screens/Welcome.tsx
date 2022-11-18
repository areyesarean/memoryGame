import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juego de Memoria</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => navigation.navigate("Payload" as never)}
        >
          <Text style={styles.textButton}>Jugar 😎</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => navigation.navigate("Packs" as never)}
        >
          <Text style={styles.textButton}>Packs de emojis 🤩</Text>
        </TouchableOpacity>
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
  resetButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 4,
    marginBottom: 10,
    borderColor: "#0f67a1",
    backgroundColor: "#093e61",
    textAlign: "center",
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
