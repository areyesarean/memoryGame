import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { ContextGame, NamePacks, Packs } from "./ContextGame";

interface Props {
  children: React.ReactNode;
}
/*
* Provee a la aplicación de:
    ? Packs de emojis
    ? Pack Seleccionado
    ? Función para seleccionar el pack
*/

//? Los emojis deben ser diferentes a los que ya existen en otros packs
let allPacks: Packs = {
  pack0: ["😎", "🎉", "🎶", "🎈", "🎁", "⚽"],
  pack1: ["🤩", "😡", "🛩", "☀", "🎅", "🎃"],
  pack2: ["🐸", "😻", "🙈", "🦊", "🐔", "🐑"],
  pack3: ["🚀", "🚨", "🧭", "🚒", "💧", "🌜"],
};

export default function ContextProvider({ children }: Props) {
  const [packSelect, setPackSelect] = useState<string[]>(allPacks.pack0);

  const handlePackSelect = useCallback(
    (pack: NamePacks) => {
      const getData = async () => {
        try {
          await AsyncStorage.setItem("@packSelect", pack);
        } catch (e) {
          console.log(e);
        }
      };
      getData();
      setPackSelect(allPacks[pack]);
    },
    [setPackSelect]
  );

  const value = useMemo(
    () => ({ packSelect, packs: allPacks, handlePackSelect }),
    [packSelect]
  );

  return <ContextGame.Provider value={value}>{children}</ContextGame.Provider>;
}