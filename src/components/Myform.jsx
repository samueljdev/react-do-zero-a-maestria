import "./Myform.css"
import React, { useState } from 'react'

const Myform = ({ user, }) => {
    const [nome, setNome] = useState(user ? user.nome : "") // definindo estado inicial
    const [email, setEmail] = useState(user ? user.email : "") // definindo estado inicial

    const [bio, setBio] = useState("")

    const handleNome = (e) => {
        setNome(e.target.value)
    }

    // processando o envio de dados
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("enviando o formulario")
        console.log(`o nome: ${nome}, o email: ${email}, biográfia: ${bio}`)

        // 07 - limpando formularios
        setNome("")
        setEmail("")
        setBio("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}> {/* atributo onSubmit para pega evento do formulario */}
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        nome="nome"
                        placeholder="Digite o seu nome"
                        onChange={handleNome} // criando função externa para executar o estado
                        value={nome}
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
                        value={email}
                    />
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea
                        name="bio"
                        placeholder="Descrição do usuario"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    >
                    </textarea>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default Myform