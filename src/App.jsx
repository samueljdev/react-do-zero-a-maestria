import './App.css'
import MyComponent from './components/MyComponent'

function App() {

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
    </>
  )
}

export default App