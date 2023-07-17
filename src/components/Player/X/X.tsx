import playerXMedium from "@image/player-x-md.png";
import playerXSmall from "@image/player-x-sm.png";
import { XProps } from "./types";
import Image from "next/image";

export function X({ size }: XProps) {
  if (size === "md") {
    return <Image alt="" src={playerXMedium} />;
  } else {
    return <Image alt="" src={playerXSmall} />;
  }
}
