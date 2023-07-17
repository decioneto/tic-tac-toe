import { O } from "./O";
import { X } from "./X";
import { PlayerProps } from "./types";

export function Player({ player, size }: PlayerProps) {
  if (player === "X") {
    return <X size={size} />;
  } else {
    return <O size={size} />;
  }
}
