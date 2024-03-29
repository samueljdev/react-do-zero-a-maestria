import React from 'react'

const ShowUserName = (props) => {
    return (
        <div>
            <hr />
            <h2>O nome do usuário é: {props.nome}</h2>
            <h2>O seu sobrenome é: {props.sobrenome}</h2>
        </div>
    )
}

export default ShowUserName