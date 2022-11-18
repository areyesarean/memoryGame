import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  winn: boolean;
  score: number;
}

export default function Info({ winn, score }: Props) {
  const getValoracion = () => {
    if (score === 12) return "🤯😲";
    if (score >= 13 && score <= 15) return "😮";
    if (score >= 16 && score <= 20) return "🤩";
    if (score >= 21 && score <= 25) return "🙄";
    if (score >= 26 && score <= 30) return "🤢";
    if (score >= 31 && score <= 35) return "🤮";
    if (score > 35) return "🤡";
  };

  return (
    <View style={styles.container}>
      { winn && (<Text style={winn ? [styles.title, styles.titleWin] : styles.title}>
        🎉 Haz Ganado 🎉
      </Text>)}
      <View style={styles.containerTextMov}>
        <Text style={[styles.title, styles.titleMov]}>Movimientos: </Text>
        <Text style={winn ? [styles.title, styles.titleMovWin] : styles.title}>
          {score}
        </Text>
      </View>
      {winn && (
        <Text style={[styles.title, styles.titleMov]}>
          Valoración de la partida: {getValoracion()}
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerTextMov: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleMov: {
    fontSize: 30,
  },
  titleMovWin: {
    fontSize: 40,
    color: "#05eeff",
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fff",
  },
  titleWin: {
    color: "#05eeff",
  },
});
