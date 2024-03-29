import React, { useState } from 'react'

const ListRender = () => {
    const [lista] = useState(["Matheus", "Pedro", "Josias"])

    return (
        <div>
            <hr />
            {/* render sem key primeiramente */}
            <ul>
                {lista.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender