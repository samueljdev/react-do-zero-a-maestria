import { useState } from 'react'
import './App.css'
import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CardDetalhes from './components/CardDetalhes'
import Fragment from './components/Fragment '

function App() {
  const nome = "Samuel"
  const [sobrenome] = useState("Lisboa")

  const carros = [
    { id: 1, marca: "Farrari", km: 0, cor: "Amarelo", newcarro: true },
    { id: 2, marca: "Kia", km: 0, cor: "Branco", newcarro: true },
    { id: 3, marca: "Renault", km: 0, cor: "Verde", newcarro: true },
    { id: 4, marca: "Honda", km: 0, cor: "Preto", newcarro: true },
  ]
  console.log(carros)

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
      <CardDetalhes marca="VW" km={1000} cor="azul" newcarro={false} />
      <CardDetalhes marca="Ford" km={0} cor="vermelha" newcarro={true} />
      <CardDetalhes marca="Fiat" km={1400} cor="branco" newcarro={false} />
      {/* loop com array de objetos */}
      {carros.map((car) => (
        <CardDetalhes
          key={car.id}
          marca={car.marca}
          km={car.km}
          cor={car.cor}
          newcarro={car.newcarro}
        />
      ))}
      <Fragment proFragment={nome} />
    </>
  )
}

export default App