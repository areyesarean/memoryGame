import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Info from "../Components/Info";
import Card from "../Components/Card";
import useGameContext from "../Hooks/useGameContext";

export default function Payload() {
  const { packSelect } = useGameContext();
  const [cards, setCards] = useState(() => {
    return [...packSelect, ...packSelect].sort(() => Math.random() - 0.5);
  });
  const [mov, setMov] = useState(0); //Score
  const [matchedCard, setMatchedCard] = useState<number[]>([]); //Parejas encontradas
  const [selectedCard, setSelectedCard] = useState<number[]>([]); //Cartas Seleccionadas

  useEffect(() => {
    /*
     * Si volteas solo una tarjeta y no vuelves a seleccionar otra
     * en menos de 2 segundos la tarjeta se voltea
     */
    if (selectedCard.length === 1) {
      const timeoutId = setTimeout(() => {
        if (selectedCard.length === 1) {
          setSelectedCard([]);
        }
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    //* Realiza la verificacion cuando dos tarjetas han sido volteadas
    if (selectedCard.length < 2) return;

    //* Si son iguales las cartas se quedan volteadas
    if (cards[selectedCard[0]] === cards[selectedCard[1]]) {
      setMatchedCard((matchedCard) => [...matchedCard, ...selectedCard]);
      setSelectedCard([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCard([]), 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [selectedCard]);

  const handleOnPress = (index: number) => {
    if (selectedCard.length >= 2 || selectedCard.includes(index)) return;
    setSelectedCard((selectedCard) => [...selectedCard, index]);
    setMov((mov) => mov + 1);
  };

  const PlayerWin = () => matchedCard.length === cards.length;

  const Reset = () => {
    setMatchedCard([]);
    setSelectedCard([]);
    setMov(0);
    setCards([...packSelect, ...packSelect].sort(() => Math.random() - 0.5));
  };

  return (
    <View style={styles.container}>
      <Info winn={PlayerWin()} score={mov} />
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

      {PlayerWin() && (
        <TouchableOpacity style={styles.resetButton} onPress={Reset}>
          <Text style={styles.textWhite}>Reiniciar Partida</Text>
        </TouchableOpacity>
      )}
      {!PlayerWin() && (
        <TouchableOpacity
          style={!mov ? styles.disabledButton : styles.resetButton}
          disabled={!mov}
          onPress={Reset}
        >
          <Text style={!mov ? styles.textDisabled : styles.textWhite}>
            Volver a comenzar
          </Text>
        </TouchableOpacity>
      )}
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
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
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
    borderColor: "#47708b",
    backgroundColor: "#334d5e",
  },
  textDisabled: {
    color: "#969696",
    fontSize: 20,
    fontWeight: "800",
  },
});
