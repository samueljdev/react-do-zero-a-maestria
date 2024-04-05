import React from 'react'
import "./Home.css"
import { UseFetch } from '../hooks/UseFetch'
import { Link } from 'react-router-dom'

const Home = () => {
    const url = "http://localhost:3000/products"
    const { data: items, loading, error } = UseFetch(url)

    return (
        <div>
            <h1>Produtos</h1>
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$: {item.price}</p>
                        <Link to={`/products/${item.id}`} >Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home