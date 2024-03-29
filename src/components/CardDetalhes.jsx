import React from 'react'

const CardDetalhes = ({ marca, km, cor }) => {
    return (
        <div>
            <hr />
            <h2>Detalhes do carro </h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>KM: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
        </div>
    )
}

export default CardDetalhes