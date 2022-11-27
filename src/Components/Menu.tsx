import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RouteNames } from '../../App'
import { useNavigation } from '@react-navigation/native'

interface MenuProps{
  children: React.ReactNode
}

export default function Menu({children}: MenuProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}


interface MenuItemProps {
  to: RouteNames
  title: string
  onPress?: () => void
}

function MenuItem({to, title, onPress}: MenuItemProps) {
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

Menu.Item = MenuItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
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