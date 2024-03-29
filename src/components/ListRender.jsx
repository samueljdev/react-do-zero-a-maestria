import React, { useState } from 'react'

const ListRender = () => {
    const [lista] = useState(["Matheus", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        { id: 1, nome: "Matheus", idade: 31 },
        { id: 2, nome: "Jones", idade: 19 },
        { id: 3, nome: "Scorpion", idade: 201 },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
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
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender