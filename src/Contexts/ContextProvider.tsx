import React, { useState, useMemo } from "react";
import { ContextGame, Packs } from "./ContextGame";

const pack0: string[] = ["😎", "🎉", "🎶", "🎈", "🎁", "⚽"];
const pack1: string[] = ["🤩", "😡", "🛩", "☀", "🎅", "🎃"];

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  const [packs, setPacks] = useState<Packs>({pack0, pack1});
  const [packSelect, setPackSelect] = useState<string[]>(packs.pack0);

  const value = useMemo(() => ({ packSelect, packs }), [packSelect]);

  return <ContextGame.Provider value={value}>{children}</ContextGame.Provider>;
}
