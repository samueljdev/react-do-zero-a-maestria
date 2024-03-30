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
                {/* Label envolvendo input(ABORDAGEM SUGERIDA NA DOCUMENTACAO) */}
                <label>
                    <span>Email</span>
                    <input type="email" nome="email" placeholder="Digite o seu email" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default Myform