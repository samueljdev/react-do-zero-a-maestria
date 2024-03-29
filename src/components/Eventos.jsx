import React from 'react'

const Eventos = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento!")
    }

    const funcaoRenderizacao = (x) => {
        if (x) {
            return (
                <h3>Renderizando isso!</h3>
            )
        } else {
            return (
                <h3>Também posso renderizar isso!</h3>
            )
        }
    }

    return (
        <div>
            <button onClick={handleMyEvent()}>Clique aqui!</button> {/* Ativa apenas uma vez quando é renderizado */}
            <br />
            <button onClick={handleMyEvent}>Clique aqui!</button> {/* Ativa sempre que é clicado */}
            <div>
                <button onClick={() => console.log("Clicou")}>
                    Clique aqui também!
                </button>
                <br />
                <button
                    onClick={() => {
                        if (true) {
                            console.log("Isso não deve existir, NUNCA colocar logica no HTML");
                        }
                    }}
                >
                    Clica aqui, por favor!
                </button>
            </div>
            {funcaoRenderizacao(true)}
            {funcaoRenderizacao(false)}
            <hr />
        </div>
    )
}

export default Eventos