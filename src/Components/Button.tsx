import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  PlayerWin: () => boolean;
  Reset: () => void;
  mov: number;
}

export default function Button({ PlayerWin, Reset, mov }: Props) {
  return PlayerWin() ? (
    <TouchableOpacity style={styles.resetButton} onPress={Reset}>
      <Text style={styles.textWhite}>Reiniciar Partida</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={!mov ? styles.disabledButton : styles.resetButton}
      disabled={!mov}
      onPress={Reset}
    >
      <Text style={!mov ? styles.textDisabled : styles.textWhite}>
        Volver a comenzar
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  resetButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#0f67a1",
    backgroundColor: "#093e61",
  },
  textWhite: {
    color: "#05eeff",
    fontSize: 20,
    fontWeight: "800",
  },
  disabledButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#2c5f81ab",
    backgroundColor: "#1e486483",
  },
  textDisabled: {
    color: "#c4c3c37a",
    fontSize: 20,
    fontWeight: "800",
  },
});
