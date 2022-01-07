import React, {useContext} from "react";
import { GameContext } from "../support/gameContext";
import "../App.css";
import { Ctrs } from "../support/Countries";

export default function Quiz() {
    const {gameState, setGameState, gameMode, setGameMode, score, setScore} = useContext(GameContext);
    const opts = document.getElementsByClassName('opt');
    console.log(Ctrs[1].name);

    const backToMenu = () => {
        setGameState("menu");
        setGameMode("");
    }

    const createRandOpts = () => {
        console.log('create')
        let list = [];
        for (let i = 0; i < 4; i++) {
            let int = randInt(Ctrs.length);
            let rand = Ctrs[int];
            console.log(Ctrs[int].name + ' rand ' + rand);
        }
        return list;
    }

    const randInt = (x) => {
        Math.floor(Math.random() * x);
    }

    const randOpts = createRandOpts();

    return (
        <div id="game" className="comp">
            <p id="score">Pisteet {score}</p>
            <button className="opt">{randOpts[0]}</button>
            <button className="opt">{randOpts[1]}</button>
            <button className="opt">{randOpts[2]}</button>
            <button className="opt">{randOpts[3]}</button>
            <button className="btn" onClick={() =>
            backToMenu()}>Takaisin valikkoon</button>
        </div>
    );
}