import React from 'react'
import { useState } from 'react'

const ManageData = () => {
    const someData = 10

    const [number, setNumber] = useState(15)
    console.log(number)

    return (
        <div>
            <hr />
            <div>
                {/* Em react não é possivel atribuir valores sem hooks */}
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variável</button>
            </div>
            <div>
                {/* atribuindo valores com hooks */}
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(20)}>Mudar state</button>
            </div>
        </div>
    )
}

export default ManageData