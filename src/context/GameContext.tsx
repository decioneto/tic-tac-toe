"use client";

import { ReactNode, createContext, useState } from "react";

interface GameContextProps {
  playMode: PlayMode;
  playerSide: PlayerSide;
  handlePlayMode: (playMode: PlayMode) => void;
  handlePlayerSide: (playerSide: PlayerSide) => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

type PlayMode = "ai" | "friend" | undefined;
export type PlayerSide = "X" | "O" | undefined;

export const GameContext = createContext({} as GameContextProps);

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [playMode, setPlayMode] = useState<PlayMode>();
  const [playerSide, setPlayerSide] = useState<PlayerSide>();

  function handlePlayMode(playMode: PlayMode) {
    setPlayMode(playMode);
  }

  function handlePlayerSide(playerSide: PlayerSide) {
    setPlayerSide(playerSide);
  }

  return (
    <GameContext.Provider
      value={{
        playMode,
        playerSide,
        handlePlayMode,
        handlePlayerSide,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
