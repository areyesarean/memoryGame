import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import RadioButton from "../Components/RadioButton";
import useGameContext from "../Hooks/useGameContext";


export default function PackEmojis() {
  const {packs} = useGameContext();
  const {pack0,  pack1} = packs;
  const [firstPackActive, setFirstPackActive] = useState(true)
  const [secondPackActive, setSecondPackActive] = useState(false)

  const handlePackSelected = () => {
    setFirstPackActive(isActive => !isActive)
    setSecondPackActive(isActive => !isActive)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Packs de emojis</Text>
      <View>
        <TouchableOpacity style={styles.containerPack} onPress={handlePackSelected}>
          <RadioButton active={firstPackActive} />
          {pack0.map((emoji, index) => {
            return (
              <Text style={styles.emoji} key={index}>
                {emoji}
              </Text>
            );
          })}
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerPack} onPress={handlePackSelected}>
        <RadioButton active={secondPackActive} />
          {pack1.map((emoji, index) => {
            return (
              <Text style={styles.emoji} key={index}>
                {emoji}
              </Text>
            );
          })}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#072a42",
  },
  containerPack: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fff",
  },
  emoji: {
    fontSize: 40,
  },
});
