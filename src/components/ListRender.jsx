import React, { useState } from 'react'

const ListRender = () => {
    const [lista] = useState(["Matheus", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        { id: 1, nome: "Matheus", idade: 31 },
        { id: 2, nome: "Jones", idade: 19 },
        { id: 3, nome: "Scorpion", idade: 201 },
    ])

    const deleteAleatorio = () => {
        const numeroAleatorio = Math.floor(Math.random() * 4)

        // deletando usando o Previus state ou estado anterior da variavel users
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => numeroAleatorio !== user.id)
        })
    }

    return (
        <div>
            <hr />
            {/* render sem key primeiramente */}
            <ul>
                {lista.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            {/* forma mais indicada para renderiza listas */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.nome} - {user.idade} anos
                    </li>
                ))}
            </ul>
            <button onClick={deleteAleatorio}>Delete aleatorio userio </button>
        </div>
    )
}

export default ListRender