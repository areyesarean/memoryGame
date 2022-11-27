import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Options {
  children: React.ReactNode;
  title: string;
}

export default function OptionsMenu({ children, title }: Options) {
  return (
    <View style={styles.containerMenu}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

interface Option {
  title: string;
  info?: string;
  onPress?: () => void;
  icon: any;
}

function Option({ title, info, icon, onPress }: Option) {
  return (
    <View style={styles.containerOption}>
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={{ color: "#a1a1a1" }}>{info}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        {icon}
      </TouchableOpacity>
    </View>
  );
}

OptionsMenu.Item = Option;

const styles = StyleSheet.create({
  containerMenu: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerOption: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
  },
  title: {
    color: "#05eeff",
    fontSize: 45,
    fontWeight: "900",
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
});
