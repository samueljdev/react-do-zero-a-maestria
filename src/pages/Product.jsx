import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UseFetch } from '../hooks/UseFetch'
import ChangeCounter from '../components/ChangeCounter'
import { CounterContext } from '../context/CounterContext'

const Product = () => {
    const { id } = useParams()

    // carregamento dado individual
    const url = "http://localhost:3000/products/" + id

    const { data: product, loading, error } = UseFetch(url)
    console.log(product)

    const { counter } = useContext(CounterContext) // alterando contexto da aplicação

    return (
        <>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R$ {product.price}</p>
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link> {/* nested router */}
                </div>
            )}
            <div>
                <hr />
                <h3>Contador do Context API</h3>
                <p>Valor do contador: {counter}</p>
                <ChangeCounter />
                <hr />
            </div>
        </>
    )
}

export default Product