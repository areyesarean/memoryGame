import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Score {
  score: number;
  emoji: string;
}

const scores: Score[] = [
  { score: 13, emoji: "😎" },
  { score: 45, emoji: "🙄" },
  { score: 20, emoji: "🤮" },
];

export default function Scores() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus puntuaciones</Text>
      <View>
        <View style={styles.containerScore}>
          <Text style={styles.text}>No</Text>
          <Text style={styles.text}>Puntaje</Text>
          <Text style={styles.text}>Valoracion</Text>
        </View>
        {scores.map((score, index) => (
          <View key={index} style={styles.containerScore}>
            <Text style={styles.text}>{index + 1}</Text>
            <Text style={styles.text}>{score.score}</Text>
            <Text style={styles.text}>{score.emoji}</Text>
          </View>
        ))}
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
  containerScore: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#29c999"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
    backgroundColor: "red"
  },
  title: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "900",
  },
});
