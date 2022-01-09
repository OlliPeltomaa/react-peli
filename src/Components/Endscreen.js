import React, {useContext} from "react";
import { GameContext } from "../support/gameContext";
import "../App.css";

export default function Endscreen() {
    const {gameState, setGameState, score, setScore} = useContext(GameContext);

    const backToMenu = () => {
        setGameState("menu");
        setScore(0);
    }

    return (
        <div className="comp">
            <h3>Vastasit väärin!</h3>
            <p id="result">Sait pistemäärän {score}</p>
            <button className="btn" onClick={() => 
            backToMenu()}>Päävalikkoon</button>
        </div>
    );
}