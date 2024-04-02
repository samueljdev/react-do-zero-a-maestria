import { useState } from 'react'
import './App.css'
import { wordsList } from "./data/words"
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [word] = useState(wordsList)
  console.log(word)

  return (
    <>
      <h1 className='App'>
        {gameStage === "start" && <StartScreen />}
        {gameStage === "game" && <Game />}
        {gameStage === "end" && <GameOver />}
      </h1>
    </>
  )
}

export default App