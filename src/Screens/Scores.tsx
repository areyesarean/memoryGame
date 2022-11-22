import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import useGameContext from "../Hooks/useGameContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Score } from "../Contexts/ContextGame";

export default function Scores() {
  const {score, setScore} = useGameContext()

  const scoreSort = score.sort((a, b) => {
    return a.score - b.score
  } )
  useEffect(() => {
    const getScore = async () => {
      try {
        const score = await AsyncStorage.getItem("@score");
        if (score !== null) {
          const scoreParse: Score[] = JSON.parse(score);
          setScore(scoreParse);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getScore();
  }, [])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus puntuaciones</Text>
      <View>
        <View style={styles.containerScore}>
          <Text style={styles.text}>No</Text>
          <Text style={styles.text}>Puntaje</Text>
          <Text style={styles.text}>Valoracion</Text>
        </View>
        {scoreSort.map((score, index) => (
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
    justifyContent: "flex-start",
  },
  containerScore: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
  },
  title: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "900",
    margin: 20
  },
});
