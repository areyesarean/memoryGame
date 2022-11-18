import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RouteNames } from "../../App";

interface Props {
  to: RouteNames
  title: string
  onPress?: () => void
}

export default function ButtonMenu({to, title, onPress}: Props) {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      style={styles.resetButton}
      onPress={ onPress ? onPress : () => navigation.navigate(to as never)}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  resetButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 4,
    marginBottom: 10,
    borderColor: "#0f67a1",
    backgroundColor: "#093e61",
    textAlign: "center",
  },
  textButton: {
    color: "#05eeff",
    fontSize: 30,
    fontWeight: "800",
  },
});
