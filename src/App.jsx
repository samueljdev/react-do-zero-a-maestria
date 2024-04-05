import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navibar from './components/Navibar'

function App() {

  return (
    <>
      <h1>07-React-router</h1>
      <BrowserRouter >
        <Navibar /> {/* como a Navibar tem elementos do react-router-dom ela fica abaixo*/}
        <Routes>
          <Route path="/" element={<Home />} /> {/* carregando dados de produtos no Home */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App