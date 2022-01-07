import './App.css';
import React, {useState, useContext} from 'react';
import { GameContext } from './support/gameContext';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';

function App() {
  const [ gameState, setGameState ] = useState("menu");
  const [ score, setScore ] = useState(0);
  const [ gameMode, setGameMode ] = useState("");

  const Header = () => {
    return (
        <p id='header'>Maapeli</p>
    )
  }

  return (
    <div className="App">
      <Header/>
      <GameContext.Provider value={{score, setScore, gameState, setGameState, gameMode, setGameMode}}>
        {gameState === "menu" && <Menu/>}
        {gameState === "quiz" && <Quiz/>}
      </GameContext.Provider>
    </div>
  );
}

export default App;
