import React, { useState } from 'react'

const ConditionalRender = () => {
    const [condicao] = useState(true)

    return (
        <div>
            <hr />
            <h3>A condição será será exibida?</h3>
            {condicao && <p>Se a condição for true sim!</p>}
            {!condicao && <p>Se a condição for false sim!</p>}
        </div>
    )
}

export default ConditionalRender