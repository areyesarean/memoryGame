import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import ButtonMenu from "../Components/ButtonMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGameContext from "../Hooks/useGameContext";
import { NamePacks } from "../Contexts/ContextGame";

export default function Welcome() {
  const { handlePackSelect } = useGameContext();

  useEffect(() => {
    const getData = async () => {
      try {
        const pack = await AsyncStorage.getItem("@packSelect");
        if (pack !== null) {
          handlePackSelect(pack as NamePacks);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juego de Memoria</Text>
      <View style={styles.containerButtons}>
        <ButtonMenu to="Payload" title="Jugar" />
        <ButtonMenu to="Packs" title="Packs de emojis" />
        {/* <ButtonMenu to="Scores" title="Tus puntuaciones 🤓" /> */}
      </View>
      <Text style={styles.infoMe}>areyesarean 2022 v0.1</Text>
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
    color: "#05eeff",
    fontSize: 45,
    fontWeight: "900",
  },
  infoMe: {
    position: "absolute",
    bottom: 10,
    color: "#0b3c5e",
  },
});
