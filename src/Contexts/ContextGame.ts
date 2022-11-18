import {createContext} from 'react'

 export interface Packs {
  pack0: string[],
  pack1: string[],
  pack2: string[]
}

export interface ContextGameType {
  packSelect: string[],
  packs: Packs,
  handlePackSelect: (pack: "pack0" | "pack1"| "pack2") => void
}

export const ContextGame = createContext<ContextGameType>({} as ContextGameType);
