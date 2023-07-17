import { ReactNode, createContext, useState } from "react";

interface GameContextProps {
    playMode: PlayMode;
    handlePlayMode: (playMode: PlayMode) => void;
}

interface GameContextProviderProps {
    children: ReactNode;
}

type PlayMode = 'ai' | 'friend' | undefined;

export const GameContext = createContext({} as GameContextProps);

export function GameContextProvider({ children }: GameContextProviderProps) {
    const [playMode, setPlayMode] = useState<PlayMode>();

    function handlePlayMode(playMode: PlayMode) {
        setPlayMode(playMode);
    }

    return (
        <GameContext.Provider value={{
            playMode,
            handlePlayMode
        }} >
            {children}
        </GameContext.Provider>
    )
}