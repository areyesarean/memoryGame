import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGameContext from "../Hooks/useGameContext";
import OptionsMenu from "../Components/MenuOptions";

export default function Options() {
  const { setScore } = useGameContext();

  const removeScore = () => {
    const remove = async () => {
      try {
        await AsyncStorage.removeItem("@score");
        setScore([]);
        alert("El registro de puntuaciones ha sido eliminado 🤧");
      } catch (error) {
        console.log(error);
      }
    };
    remove();
  };


  return (
    <View style={styles.container}>
      <OptionsMenu title="Opciones">
        <OptionsMenu.Item 
          title="Eliminar registro de puntuaciones"
          icon={<FontAwesome name="trash" size={20} color="#fff" />}
          info="Esta opción es irreversible, tenga cuidado"
          onPress={removeScore}
        />
      </OptionsMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#072a42",
  }
});
