import React, { useState, useMemo, useCallback } from "react";
import { ContextGame } from "./ContextGame";

interface Props {
  children: React.ReactNode;
}
/*
* Provee a la aplicación de:
    ? Packs de emojis
    ? Pack Seleccionado
    ? Función para seleccionar el pack
*/
interface AllPacks {
  pack0: string[];
  pack1: string[];
  pack2: string[];
}
//? Los emojis deben ser diferentes a los que ya existen en otros packs
let allPacks: AllPacks = {
  pack0: ["😎", "🎉", "🎶", "🎈", "🎁", "⚽"],
  pack1: ["🤩", "😡", "🛩", "☀", "🎅", "🎃"],
  pack2: ["🐸","😻", "🙈", "🦊", "🐔","🐑"]
}

export default function ContextProvider({ children }: Props) {
  const [packSelect, setPackSelect] = useState<string[]>(allPacks.pack0);

  const handlePackSelect = useCallback((pack: "pack0" | "pack1" | "pack2") => {
    setPackSelect(allPacks[pack])
  }, []);

  const value = useMemo(
    () => ({ packSelect, packs: allPacks, handlePackSelect }),
    [packSelect]
  );

  return <ContextGame.Provider value={value}>{children}</ContextGame.Provider>;
}
