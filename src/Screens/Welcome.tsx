import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGameContext from "../Hooks/useGameContext";
import { NamePacks } from "../Contexts/ContextGame";
import Menu from "../Components/Menu";

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
      <Menu>
        <Menu.Item to="Payload" title="Jugar"/>
        <Menu.Item to="Packs" title="Packs de emojis" />
        <Menu.Item to="Scores" title="Puntuaciones" />
        <Menu.Item to="Options" title="Opciones" />
      </Menu>
      <Text style={styles.infoMe}>areyesarean 2022 v0.1.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#072a42",
  },
  title: {
    fontSize: 45,
    fontWeight: "900",
    color: "#05eeff",
  },
  infoMe: {
    position: "absolute",
    bottom: 10,
    color: "#0b3c5e",
  },
});
