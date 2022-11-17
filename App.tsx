import React from "react";
import { StatusBar } from "expo-status-bar";
import Payload from "./src/Screens/Payload";
import Welcome from "./src/Screens/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const cardsB: string[] = ["😎", "🎉", "🤑", "🎈", "🎁", "⚽"];
const cardsB1: string[] = ["🤩", "🌍", "🛩", "☀", "🎅", "🎃"];
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{
        statusBarColor: "#072a42",
        headerShown: false
      }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen 
          name="Payload" 
          component={Payload} 
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
