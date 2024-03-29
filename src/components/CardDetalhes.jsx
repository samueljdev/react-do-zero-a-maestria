import React from 'react'

const CardDetalhes = ({ marca, km, cor, newcarro }) => {
    return (
        <div>
            <hr />
            <h2>Detalhes do carro </h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>KM: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
            {newcarro && <p>Este Carro é novo! </p>}
        </div>
    )
}

export default CardDetalhes