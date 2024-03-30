import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const inline = 15
  const [nome] = useState("samuel")
  const redTitle = true

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
      {/* ABORDAGEM USADA EM PROJETOS REAIS */}
      <h2 className={redTitle ? "red-title" : "title"}>Este Titulo vai ter classe dinamica</h2>
      {/* ABORDAGEM USADA EM PROJETOS REAIS */}
      <Title />
      <h2 className="myTitle">Testando...</h2> {/* não recebe o css da classe styles.myTitle, pois a mesma esta restrigida ao escopo*/}
    </>
  )
}

export default App