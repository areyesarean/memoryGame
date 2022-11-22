import React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Payload from "./src/Screens/Payload";
import Welcome from "./src/Screens/Welcome";
import PackEmojis from "./src/Screens/PackEmojis";
import ContextProvider from "./src/Contexts/ContextProvider";
import Scores from "./src/Screens/Scores";
import Options from "./src/Screens/Options";

const Stack = createNativeStackNavigator();

export type RouteNames = "Welcome" | "Payload" | "Packs" | "Scores" | "Options"

export default function App() {

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            statusBarColor: "#072a42",
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Payload" component={Payload} />
          <Stack.Screen name="Packs" component={PackEmojis} />
          <Stack.Screen name="Scores" component={Scores} />
          <Stack.Screen name="Options" component={Options} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </ContextProvider>
  );
}
