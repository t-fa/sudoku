import './App.css';
import React, {useState} from 'react'

import Start from './components/Start'
import Board from './components/Board'

function App() {
  const [gameStart, setGameStart] = useState(true);
  const [boardSize, setBoardSize] = useState();

  const startGame = () => {
    setGameStart(true)
  }

  return (
    <div className="App">
      <h1>Sudoku</h1>
      {gameStart ?
      <Board size={boardSize}/>
      :
      <Start size={boardSize} setSize={setBoardSize} setStart={startGame}/>}
    </div>
  )
}

export default App;
