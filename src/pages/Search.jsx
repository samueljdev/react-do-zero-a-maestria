import React from 'react'
import { useSearchParams, Link } from "react-router-dom"
import { UseFetch } from "../hooks/UseFetch"
import ChangeCounter from '../components/ChangeCounter'
import { UseCounterContext } from '../hooks/UseCounterContext'

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const { data: items } = UseFetch(url)

    const { counter } = UseCounterContext()

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
            <div>
                <hr />
                <h3>Contador do Context API</h3>
                <p>Valor do contador: {counter}</p>
                <ChangeCounter />
                <hr />
            </div>
        </div>
    )
}

export default Search