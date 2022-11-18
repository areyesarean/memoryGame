import { useContext } from "react";
import { ContextGame } from "../Contexts/ContextGame";

export default function useGameContext() {
  return useContext(ContextGame);
}
