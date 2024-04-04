import './App.css'
import { useState } from 'react'
import { UseFetch } from './hooks/UseFetch'

const url = "http://localhost:3000/products"

function App() {
  const [setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // renomeando a variavel data para items
  const { data: items } = UseFetch(url)

  // função que vai enviar um formulario
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name: name,
      price: price,
    }

    const requisicao = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify(product)
    })

    // carregamento dinamico
    const addedProduct = await requisicao.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct]) // spreed operator
    setName("")
    setPrice("")
  }

  return (
    <div className='App'>
      <h1>Lista de Produtos</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
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
          <input type="submit" value={"Criar"} />
        </form>
      </div>
    </div>
  )
}

export default App