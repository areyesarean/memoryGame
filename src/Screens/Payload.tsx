import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Info from "../Components/Info";
import useGameContext from "../Hooks/useGameContext";
import Button from "../Components/Button";
import Board from "../Components/Board";

export default function Payload() {
  const { packSelect, saveScore } = useGameContext();
  const [cards, setCards] = useState(() =>
    [...packSelect, ...packSelect].sort(() => Math.random() - 0.5)
  );
  const [mov, setMov] = useState(0); //Score
  const [matchedCard, setMatchedCard] = useState<number[]>([]); //Parejas encontradas
  const [selectedCard, setSelectedCard] = useState<number[]>([]); //Cartas Seleccionadas

  const getValoracion = () => {
    if (mov <= 12) return "🤯😲";
    if (mov >= 13 && mov <= 15) return "😮";
    if (mov >= 16 && mov <= 20) return "🤩";
    if (mov >= 21 && mov <= 25) return "🙄";
    if (mov >= 26 && mov <= 30) return "🤢";
    if (mov >= 31 && mov <= 35) return "🤮";
    if (mov > 35) return "🤡";
  };

  useEffect(() => {
    if (matchedCard.length === cards.length) {
      console.log("Win");
      saveScore({ score: mov, emoji: getValoracion() || "😴" });
    }
    /*
     * Si volteas solo una tarjeta y no vuelves a seleccionar otra
     * en menos de 2 segundos la tarjeta se voltea
     */
    if (selectedCard.length === 1) {
      const timeoutId = setTimeout(() => {
        setSelectedCard([]);
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    //* Impide que se volteen mas de dos tarjetas al mismo tiempo
    if (selectedCard.length < 2) return;

    //* Si son iguales las cartas se quedan volteadas
    if (cards[selectedCard[0]] === cards[selectedCard[1]]) {
      setMatchedCard((matchedCard) => [...matchedCard, ...selectedCard]);
      setSelectedCard([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCard([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCard]);

  const handleOnPress = (index: number) => {
    if (
      selectedCard.length >= 2 ||
      selectedCard.includes(index) ||
      matchedCard.includes(index)
    )return;

    setSelectedCard((selectedCard) => [...selectedCard, index]);
    setMov((mov) => mov + 1);
  };

  const PlayerWin = () => {
    return matchedCard.length === cards.length;
  };

  const Reset = () => {
    setMatchedCard([]);
    setSelectedCard([]);
    setMov(0);
    setCards([...packSelect, ...packSelect].sort(() => Math.random() - 0.5));
  };

  return (
    <View style={styles.container}>
      <Info {...{ PlayerWin, mov }} />
      <Board {...{ cards, selectedCard, matchedCard, handleOnPress }} />
      <Button {...{ PlayerWin, Reset, mov }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#072a42",
    alignItems: "center",
    justifyContent: "center",
  },
});
