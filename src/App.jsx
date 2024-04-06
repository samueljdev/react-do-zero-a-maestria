import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navibar from './components/Navibar'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <h1>07-React-router</h1>
      <BrowserRouter >
        <Navibar /> {/* link ativo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} /> {/* carregamento dinamico de dados */}
          <Route path="/products/:id/info" element={<Info />} /> {/* nested router */}
          <Route path="*" element={<NotFound />} /> {/* no match route */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App