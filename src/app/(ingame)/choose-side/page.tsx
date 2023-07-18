"use client";

import { useState, useContext } from "react";
import { GameContext, PlayerSide } from "@/context/GameContext";
import { Player } from "@/components/Player";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ChooseSide() {
  const { handlePlayerSide, playerSide } = useContext(GameContext);

  function handleXSide() {
    handlePlayerSide("X");
  }

  function handleOSide() {
    handlePlayerSide("O");
  }

  const buttonClassName =
    "opacity-30 hover:opacity-100 transition-opacity outline-none";

  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <h2 className="text-5xl mb-4">Pick your side</h2>
      <div className="flex items-center gap-28">
        <button
          onClick={handleXSide}
          className={`${buttonClassName} ${
            playerSide === "X" && "opacity-100"
          }`}
        >
          <Player player="X" size="sm" />
        </button>
        <button
          onClick={handleOSide}
          className={`${buttonClassName} ${
            playerSide === "O" && "opacity-100"
          }`}
        >
          <Player player="O" size="sm" />
        </button>
      </div>
      <Link href="/in-game">
        <Button.Root styleType="PRIMARY" disabled={playerSide === undefined}>
          <Button.Text>Start</Button.Text>
        </Button.Root>
      </Link>
    </div>
  );
}
