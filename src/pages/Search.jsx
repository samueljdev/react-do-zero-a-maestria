import React from 'react'
import { useSearchParams, Link } from "react-router-dom"
import { UseFetch } from "../hooks/UseFetch"

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const { data: items } = UseFetch(url)

    return (
        <div>
            <h1>Resultados disponíveis:</h1>
            <ul className="products">
                {items &&
                    items.map((product) => (
                        <li key={product.id}>
                            <h2>{product.name}</h2>
                            <p>R$: {product.price}</p>
                            <Link to={`/products/${product.id}`}>Detalhes</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Search