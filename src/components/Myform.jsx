import "./Myform.css"
import React, { useState } from 'react'

const Myform = () => {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()

    const handleNome = (e) => {
        setNome(e.target.value)
    }

    console.log(nome)
    console.log(email)

    return (
        <>
            <form>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        nome="nome"
                        placeholder="Digite o seu nome"
                        onChange={handleNome} // criando função externa para executar o estado
                    />
                </div>
                {/* Label envolvendo input(ABORDAGEM SUGERIDA NA DOCUMENTACAO) */}
                <label>
                    <span>Email</span>
                    <input
                        type="email"
                        nome="email"
                        placeholder="Digite o seu email"
                        onChange={(e) => setEmail(e.target.value)}  // alterando o state inline
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default Myform