import './App.css'
import Myform from './components/Myform'

function App() {

  return (
    <>
      <h1>Formulários</h1>
      <Myform user={{
        nome: "Josias",
        email: "josias@gmail.com",
        bio: "Sou advogado",
        role: "editor"
      }}
      /> {/* input select */}
    </>
  )
}

export default App