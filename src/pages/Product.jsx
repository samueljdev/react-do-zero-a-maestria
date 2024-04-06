import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { UseFetch } from '../hooks/UseFetch'

const Product = () => {
    const { id } = useParams()

    // carregamento dado individual
    const url = "http://localhost:3000/products/" + id

    const { data: product, loading, error } = UseFetch(url)
    console.log(product)

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
        </>
    )
}

export default Product