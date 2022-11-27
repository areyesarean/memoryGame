import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { ContextGame, NamePacks, Packs, Score } from "./ContextGame";

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
  const [score, setScore] = useState<Score[]>([]);

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

  const saveScore = useCallback((scoreNew: Score) => {
    const saveScoreLocal = async () => {
      try {
        let set = new Set( [...score, scoreNew].map( el => JSON.stringify(el) ) )
        let arrUniqueElements = Array.from( set ).map( el => JSON.parse(el) );
        const scoreStringify = JSON.stringify(arrUniqueElements);
        await AsyncStorage.setItem("@score", scoreStringify);
        console.log("Score saved");
      } catch (e) {
        console.log(e);
      }
    };
    saveScoreLocal();
  }, [score]);

  const value = useMemo(
    () => ({
      packSelect,
      packs: allPacks,
      handlePackSelect,
      score,
      saveScore,
      setScore,
    }),
    [packSelect, score]
  );

  return <ContextGame.Provider value={value}>{children}</ContextGame.Provider>;
}
