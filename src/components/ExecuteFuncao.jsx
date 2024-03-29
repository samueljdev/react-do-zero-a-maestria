import React from 'react'

const ExecuteFuncao = ({ myFuncao }) => {
    return (
        <div>
            <hr />
            <button onClick={myFuncao}>CliQue Aqui para executar a função</button>
        </div>
    )
}

export default ExecuteFuncao