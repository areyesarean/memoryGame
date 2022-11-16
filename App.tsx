import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Payload from "./src/Screens/Payload";
import Welcome from "./src/Screens/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const cardsB: string[] = ["😎", "🎉", "🎶", "🎈", "🎁", "⚽"];
const cardsB1: string[] = ["🤩", "🌍", "🛩", "☀", "🎅", "🎃"];
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Payload" component={Payload} />
        </Stack.Navigator>
        <StatusBar style="light" />
      
    </NavigationContainer>
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
