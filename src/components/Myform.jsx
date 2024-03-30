import "./Myform.css"
import React, { useState } from 'react'

const Myform = () => {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()

    const handleNome = (e) => {
        setNome(e.target.value)
    }

    console.log(nome)

    return (
        <>
            <form>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        nome="nome"
                        placeholder="Digite o seu nome"
                        onChange={handleNome}
                    />
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