import './App.css';
import React, {useState, useContext} from 'react';
import { GameContext } from './support/gameContext';

function App() {

  const Header = () => {
    return (
      <h2>Maapeli</h2>
    )
  }





  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
