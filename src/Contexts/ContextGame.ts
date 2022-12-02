import {createContext} from 'react'

 export interface Packs {
  pack0: string[],
  pack1: string[],
  pack2: string[],
  pack3: string[],
}

export type NamePacks = "pack0" | "pack1"| "pack2" | "pack3";

export interface Score {
  score: number;
  emoji: string;
}
export interface ContextGameType {
  packSelect: string[],
  packs: Packs,
  score: Score[]
  handlePackSelect: (pack: NamePacks) => void
  saveScore: (score: Score) => void,
  setScore: (score: Score[]) => void
}

export const ContextGame = createContext<ContextGameType>({} as ContextGameType);
