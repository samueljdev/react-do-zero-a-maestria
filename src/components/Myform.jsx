import React from 'react'
import "./Myform.css"

const Myform = () => {
    return (
        <>
            <form>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" nome="nome" placeholder="Digite o seu nome" />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default Myform