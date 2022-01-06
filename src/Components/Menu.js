import React from "react";
import GameContext from "../support/gameContext";
import "../App.css";

export default function Menu() {
    const {gameState, setGameState, gameMode, setGameMode} = useContext(GameContext);

    const startGame = (x) => {
        setGameState("quiz");
        setGameMode(x);
    }

    return (
        <div id="menu">
            <button onClick={() =>
                startGame("europe")
            }>Eurooppa</button>
        </div>
    );
}