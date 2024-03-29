import React, { useState } from 'react'

const ConditionalRender = () => {
    const [condicao] = useState(true)

    const [nome, setNome] = useState("")
    console.log(nome)

    return (
        <div>
            <hr />
            <h3>A condição será será exibida?</h3>
            {condicao && <p>Se a condição for true sim!</p>}
            {!condicao && <p>Se a condição for false sim!</p>}
            <br />
            {nome === "João" ? (
                <div>
                    <p>O nome {nome} encontrato</p>
                </div>
            ) : (
                <div>
                    <p>O nome não encontrato</p>
                </div>
            )}
            <button onClick={() => setNome("João")}>Clique Aqui</button>
        </div>
    )
}

export default ConditionalRender