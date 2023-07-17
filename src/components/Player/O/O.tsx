import playerOMedium from "@image/player-o-md.png";
import playerOSmall from "@image/player-o-sm.png";
import { OProps } from "./types";
import Image from "next/image";

export function O({ size }: OProps) {
  if (size === "md") {
    return <Image alt="" src={playerOMedium} />;
  } else {
    return <Image alt="" src={playerOSmall} />;
  }
}
