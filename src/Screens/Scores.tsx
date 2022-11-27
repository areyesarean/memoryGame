import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGameContext from "../Hooks/useGameContext";
import { Score } from "../Contexts/ContextGame";

export default function Scores() {
  const { score, setScore } = useGameContext();

  const scoreSort = score.sort((a, b) => {
    return a.score - b.score;
  });

  useEffect(() => {
    const getScore = async () => {
      try {
        const score = await AsyncStorage.getItem("@score");
        if (score !== null) {
          const scoreParse: Score[] = JSON.parse(score);
          setScore(scoreParse);
          console.log(scoreParse);
          
        }
      } catch (e) {
        console.log(e);
      }
    };
    getScore();
  }, []);

  if (scoreSort.length === 0) {
    return (
      <View style={styles.containerError}>
        <Text style={[styles.title, { textAlign: "center" }]}>
          No haz jugado ninguna partida aún 🙄
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus puntuaciones</Text>
      <View>
        <View style={styles.containerScore}>
          <Text style={styles.text}>Puntuación</Text>
          <Text style={styles.text}>Valoración</Text>
        </View>
        <ScrollView>
          {scoreSort.map((score, index) => (
            <ScoreItem key={index} {...{ score, index }} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

function ScoreItem({ score, index }: any) {
  return (
    <View
      key={index}
      style={index === 0 ? styles.containerScoreBest : styles.containerScore}
    >
      <Text style={index === 0 ? styles.bestScore : styles.text}>
        {score.score}
      </Text>
      <Text
        style={[
          index === 0 ? styles.bestScore : styles.text,
          { marginLeft: 50 },
        ]}
      >
        {score.emoji}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#072a42",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
  },
  containerError: {
    flex: 1,
    backgroundColor: "#072a42",
    alignItems: "center",
    justifyContent: "center",
  },
  containerScore: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  containerScoreBest: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#05eeffb3",
    borderRadius: 10,
    padding: 5,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
  },
  title: {
    color: "#05eeff",
    fontSize: 45,
    fontWeight: "900",
    margin: 20,
  },
  bestScore: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
  },
});
