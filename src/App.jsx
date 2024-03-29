import { useState } from 'react'
import './App.css'
import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'

function App() {
  const nome = "Samuel"
  const [sobrenome] = useState("Lisboa")

  return (
    <>
      <h1>Pilares do React</h1>
      <div>
        <img src='/img1.jpg' alt='Paisagem' />
      </div>
      <div>
        <img src={City} alt='Paisagem' />
      </div>
      <ManageData />
      <ListRender /> {/* Previus state */}
      <ConditionalRender /> {/* renderização ternária */}
      <ShowUserName nome={nome} sobrenome={sobrenome} />
    </>
  )
}

export default App