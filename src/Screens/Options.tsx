import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGameContext from "../Hooks/useGameContext";

export default function Options() {
  const {setScore} = useGameContext()
  const removeScore = () => {
    const remove = async() => {
      try {
        await AsyncStorage.removeItem("@score");
        setScore([])
        alert("El registro de puntuación ha sido eliminado")
      } catch (error) {
        console.log(error);
        
      }
    }
    remove();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opciones</Text>
      <View style={styles.containerOption}>
        <View>
          <Text style={styles.text}>Eliminar registro de puntuaciones</Text>
          <Text style={{ color: "#a1a1a1" }}>
            Esta opcion es irreversible, tenga cuidado
          </Text>
        </View>
        <TouchableOpacity onPress={removeScore}>
          <FontAwesome name="trash" size={20} color="#fff" />
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
    justifyContent: "flex-start",
  },
  containerOption: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 20,
  },
  title: {
    color: "#05eeff",
    fontSize: 45,
    fontWeight: "900",
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
});
