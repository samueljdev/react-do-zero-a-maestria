import './App.css'
import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  // resgatando os dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}</li>
        ))}
      </ul>
    </>
  )
}

export default App