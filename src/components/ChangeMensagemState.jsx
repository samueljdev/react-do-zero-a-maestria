import React from 'react'

const ChangeMensagemState = ({ handleMensagem }) => {
    const mensagens = ["HELLO", "FRIENDS", "CHEESE", "WATER"]

    return (
        <div>
            <button onClick={() => handleMensagem(mensagens[0])}>1</button>&nbsp;&nbsp;
            <button onClick={() => handleMensagem(mensagens[1])}>2</button>&nbsp;&nbsp;
            <button onClick={() => handleMensagem(mensagens[2])}>3</button>&nbsp;&nbsp;
            <button onClick={() => handleMensagem(mensagens[3])}>4</button>
        </div>
    )
}

export default ChangeMensagemState