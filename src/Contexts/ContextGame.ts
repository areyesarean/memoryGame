import {createContext} from 'react'

 export interface Packs {
  pack0: string[],
  pack1: string[],
}

export interface ContextGameType {
  packSelect: string[],
  packs: Packs
}

export const ContextGame = createContext<ContextGameType>({} as ContextGameType);
