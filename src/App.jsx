import './App.css'
import { useState } from 'react'
import { UseFetch } from './hooks/UseFetch'

const url = "http://localhost:3000/products"

function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // renomeando a variavel data para items
  const { data: items, httpConfig, loading, error } = UseFetch(url)

  // função que vai enviar um formulario
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name: name,
      price: price,
    }

    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }

  return (
    <div className='App'>
      <h1>Lista de Produtos</h1>
      {/* Estado de loading se for true carrega o paragrafo */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name='price'
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {loading && <input type="submit" disabled value={"Aguarde"} />}
          {!loading && <input type="submit" value={"Criar"} />}
        </form>
      </div>
    </div>
  )
}

export default App