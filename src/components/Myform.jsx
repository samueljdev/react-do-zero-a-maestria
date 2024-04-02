import "./Myform.css"
import React, { useState } from 'react'

const Myform = ({ user, }) => {
    const [nome, setNome] = useState(user ? user.nome : "") // definindo estado inicial
    const [email, setEmail] = useState(user ? user.email : "") // definindo estado inicial

    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleNome = (e) => {
        setNome(e.target.value)
    }

    // processando o envio de dados
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("enviando o formulario")
        console.log(`o nome: ${nome}, o email: ${email}, biográfia: ${bio}, função: ${role}`)

        // 07 - limpando formularios
        setNome("")
        setEmail("")
        setBio("")
        setRole("")
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
                <label>
                    <span>Função no sistema</span>
                    <select
                        name="role"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="leitor">Leitor</option>
                        <option value="redator">Redator</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default Myform