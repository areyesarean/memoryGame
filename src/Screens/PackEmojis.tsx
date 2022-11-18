import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RadioButton from "../Components/RadioButton";
import useGameContext from "../Hooks/useGameContext";

export default function PackEmojis() {
  const { packSelect, packs, handlePackSelect } = useGameContext();
  const { pack0, pack1, pack2 } = packs;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Packs de emojis</Text>
      <View>
        {/* Pack 1 */}
        <View style={styles.containerPack}>
          <RadioButton
            active={packSelect.includes(pack0[0])}
            onPress={() => handlePackSelect("pack0")}
          />
          {pack0.map((emoji, index) => {
            return (
              <Text style={styles.emoji} key={index}>
                {emoji}
              </Text>
            );
          })}
        </View>
        {/* Pack 1 */}
        <View style={styles.containerPack}>
          <RadioButton
            active={packSelect.includes(pack1[0])}
            onPress={() => handlePackSelect("pack1")}
          />
          {pack1.map((emoji, index) => {
            return (
              <Text style={styles.emoji} key={index}>
                {emoji}
              </Text>
            );
          })}
        </View>
        {/* Pack 2 */}
        <View style={styles.containerPack}>
          <RadioButton
            active={packSelect.includes(pack2[0])}
            onPress={() => handlePackSelect("pack2")}
          />
          {pack2.map((emoji, index) => {
            return (
              <Text style={styles.emoji} key={index}>
                {emoji}
              </Text>
            );
          })}
        </View>
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
    marginBottom: 20,
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
