import React from 'react'

const Eventos = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento!")
    }

    return (
        <div>
            <button onClick={handleMyEvent()}>Clique aqui!</button> {/* Ativa apenas uma vez quando é renderizado */}
            <br />
            <button onClick={handleMyEvent}>Clique aqui!</button> {/* Ativa sempre que é clicado */}
            <hr />
        </div>
    )
}

export default Eventos