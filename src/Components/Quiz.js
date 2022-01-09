import React, {useContext, useEffect} from "react";
import { GameContext } from "../support/gameContext";
import "../App.css";
import { Ctrs } from "../support/Countries";

export default function Quiz() {
    const {gameState, setGameState, gameMode, setGameMode, score, setScore} = useContext(GameContext);

    let countries;
    if (gameMode === 'europe') {
        countries = Ctrs[0];
    } else if (gameMode === 'sAmerica') {
        countries = Ctrs[1];
    } else if (gameMode === 'asia'){
        countries = Ctrs[2];
    } else {
        countries = Ctrs[3];
    }

    useEffect(() => {
        populateOptions();
        console.log(countries.length)
    }, []);

    const opts = document.getElementsByClassName('opt');

    const backToMenu = () => {
        emptyOpts();
        setGameState("menu");
        setGameMode("");
        setScore(0);
    }

    const randInt = () => {
        return Math.floor(Math.random() * countries.length);
    }

    const handleClick = (x) => {
        if (checkAnswer(opts[x].popl)) {
            setScore(score+1);
            populateOptions();
        } else {
            endGame();
        }
    }

    const checkAnswer = (x) => {
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].popl > x) {
                return false;
            }
        }
        return true;
    }

    const emptyOpts = () => {
        for (let i = 0 ; i < opts.length; i++) {
            opts[i].textContent = '';
            opts[i].popl = "0";
        } 
    }


    const endGame = () => {
        emptyOpts();
        setGameMode("");
        console.log('häviö');
        setGameState('endscreen');
    }

    const populateOptions = () => {
        for (let i = 0; i < opts.length;) {
            let rand = countries[randInt()];
            if (checkDuplicate(rand.name)) {
                rand = countries[randInt()];
            } else {
                opts[i].textContent = rand.name;
                opts[i].popl = rand.popl;
                i++;
            }
        }
    }

    const checkDuplicate = (x) => {
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].textContent === x) {
                return true;
            }
        }
        return false;
    }

    populateOptions();

    return (
        <div id="game" className="comp">
            <h3>Minkä maan väkiluku on suurin?</h3>
            <p id="score">Pisteet {score}</p>
            <button className="opt" data-popl="0" onClick={() =>
            handleClick(0)}></button>
            <button className="opt" data-popl="0" onClick={() =>
            handleClick(1)}></button>
            <button className="opt" data-popl="0" onClick={() =>
            handleClick(2)}></button>
            <button className="opt" data-popl="0" onClick={() => 
            handleClick(3)}></button>
            <button className="btn" data-popl="0" onClick={() =>
            backToMenu()}>Päävalikkoon</button>
        </div>
    );
}