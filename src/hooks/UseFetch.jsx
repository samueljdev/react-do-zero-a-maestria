import React, { useEffect, useState } from 'react'

// Define um hook personalizado chamado UseFetch
export const UseFetch = (url) => {
    // Utiliza o hook useState para criar uma variável de estado chamada data
    const [data, setData] = useState(null)

    // Utiliza o hook useEffect para executar uma função sempre que a URL fornecida muda
    useEffect(() => {

        // Define uma função assíncrona para buscar dados da URL fornecida
        const fetchData = async () => {
            // Faz uma requisição para a URL
            const request = await fetch(url)
            // Converte a resposta da requisição para JSON
            const json = await request.json()
            // Atualiza a variável de estado data com os dados JSON
            setData(json)
        }

        // Chama a função fetchData
        fetchData()
        // A função dentro de useEffect será chamada novamente se a URL mudar
    }, [url])

    // Retorna um objeto com a variável de estado data
    return { data }
}