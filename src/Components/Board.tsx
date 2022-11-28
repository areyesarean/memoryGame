import { View, StyleSheet } from "react-native";
import React from "react";
import Card from "./Card";

interface Props {
  cards: string[];
  selectedCard: number[];
  matchedCard: number[];
  handleOnPress: (index: number) => void;
}

export default function Board({
  cards,
  selectedCard,
  matchedCard,
  handleOnPress,
}: Props) {
  return (
    <View style={styles.board}>
      {cards.map((card, index) => {
        const fliped =
          selectedCard.includes(index) || matchedCard.includes(index);
        return (
          <Card
            key={index}
            fliped={fliped}
            onPress={() => handleOnPress(index)}
          >
            {card}
          </Card>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
});
