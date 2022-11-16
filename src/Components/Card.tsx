import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
  fliped: boolean;
  onPress: () => void;
}

export default function Card({ fliped, children,onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {fliped ? (
        <Text style={styles.cardItem}>{children}</Text>
      ) : (
        <Text style={styles.cardItem}>?</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#093e61",
    borderColor: "#0f67a1",
    borderWidth: 4
  },
  cardItem: {
    fontSize: 50,
    fontWeight: "800",
    color: "#fff",
  },
});
