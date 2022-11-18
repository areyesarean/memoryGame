import { View, Text, StyleSheet } from "react-native";
import React from "react";
import useGameContext from "../Hooks/useGameContext";
import RadioButton from "./RadioButton";
import { NamePacks } from "../Contexts/ContextGame";

interface Props {
  namePack: NamePacks;
}

export default function Pack({ namePack }: Props) {
  const { packSelect, packs, handlePackSelect } = useGameContext();
  const pack = packs[namePack];

  return (
    <View style={styles.containerPack}>
      <RadioButton
        active={packSelect.includes(pack[0])}
        onPress={() => handlePackSelect(namePack)}
      />
      {pack.map((emoji, index) => (
        <Text style={styles.emoji} key={index}>
          {emoji}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerPack: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  emoji: {
    fontSize: 40,
  },
});
