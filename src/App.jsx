import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const inline = 15
  const [nome] = useState("samuel")

  return (
    <>
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este é o paragrafo é do App.jsx</p> {/* o CSS de componente ele vaza*/}
      <p className="my-paragrafo">Este tbm é do componente</p>

      {/* Evitar css inline */}
      <p style={{
        color: "blueviolet",
        padding: "25px",
        border: "2px solid red"
      }}>
        Este elemento foi estilizado de forma inline
      </p>

      <h2 style={inline < 20 ? ({ color: "orangered" }) : ({ color: "purple" })}>
        CSS dinamico
      </h2>

      <h2 style={inline > 20 ? ({ color: "orangered" }) : ({ color: "purple" })}>
        CSS dinamico
      </h2>

      <h2 style={
        nome === "samuel" ?
          ({ color: "greenyellow", backgroundColor: "#000" })
          :
          (null)}
      >
        Teste nome
      </h2>
    </>
  )
}

export default App