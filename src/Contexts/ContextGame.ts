import {createContext} from 'react'

 export interface Packs {
  pack0: string[],
  pack1: string[],
  pack2: string[],
  pack3: string[],
}

export type NamePacks = "pack0" | "pack1"| "pack2" | "pack3";

export interface ContextGameType {
  packSelect: string[],
  packs: Packs,
  handlePackSelect: (pack: NamePacks) => void
}

export const ContextGame = createContext<ContextGameType>({} as ContextGameType);
