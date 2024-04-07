import React, { useContext } from 'react'
import "./Home.css"
import { UseFetch } from '../hooks/UseFetch'
import { Link } from 'react-router-dom'
import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

const Home = () => {
    const url = "http://localhost:3000/products"
    const { data: items, error } = UseFetch(url)

    const { counter } = useContext(CounterContext) // alterando contexto da aplicação

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

export default Home