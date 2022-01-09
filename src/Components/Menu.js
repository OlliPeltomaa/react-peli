import React, {useContext} from "react";
import { GameContext } from "../support/gameContext";
import "../App.css";

export default function Menu() {
    const {gameState, setGameState, gameMode, setGameMode} = useContext(GameContext);

    const startGame = (x) => {
        setGameState("quiz");
        setGameMode(x);
    }

    return (
        <div id="menu" className="comp">
            <h3>Valitse peli</h3>
            <button className="sel" onClick={() => {
            startGame('europe');
            }}>Eurooppa</button>
            <button className="sel" onClick={() => {
            startGame('sAmerica');
            }}>Etelä-Amerikka</button>
            <button className="sel" onClick={() => {
            startGame('asia');
            }}>Aasia</button>
            <button className="sel" onClick={() => {
            startGame('all');
            }}>Kaikki</button>
        </div>
    );
}