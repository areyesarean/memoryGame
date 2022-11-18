import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  active: boolean;
}

export default function RadioButton({ active}: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      {active && <AntDesign name="checkcircle" color="#05eeff" size={20} />}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    backgroundColor: "#072a42",
    borderColor: "#05eeff",
    borderWidth: 2,
    borderRadius: 25,
    marginRight: 10
  },
});
