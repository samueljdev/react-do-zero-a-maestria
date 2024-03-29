import './App.css'
import Eventos from './components/Eventos'
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpressions from './components/TemplateExpressions'

function App() {

  return (
    <>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <hr />
      <Eventos /> {/* funções de renderização*/}
    </>
  )
}

export default App