import React from 'react'

const CardDetalhes = ({ marca, km, cor, newCarro }) => {
    return (
        <div>
            <hr />
            <h2>Detalhes do carro </h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>KM: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
            {newCarro && <p>Este Carro é novo! </p>}
        </div>
    )
}

export default CardDetalhes