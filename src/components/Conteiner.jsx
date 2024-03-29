import React from 'react'

const Conteiner = ({ children, meuValor }) => {
    return (
        <>
            <hr />
            <div>
                <h2>Este é o titulo do container</h2>
                {children}
                <p>O valor é {meuValor}</p>
            </div>
        </>
    )
}

export default Conteiner