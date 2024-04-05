import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1>07-React-router</h1>
      <BrowserRouter />
      <Routes> {/* elementos fora do Routes irao se repetir em todas as páginas*/}
        <Route path="/" element="" />
      </Routes>
    </>
  )
}

export default App