import React, { useEffect, useState } from 'react'

// Define um hook personalizado chamado UseFetch
export const UseFetch = (url) => {
    // Utiliza o hook useState para criar uma variável de estado chamada data
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [error, setError] = useState(null)

    // Estado de loading
    const [loading, setLoading] = useState(false)

    const httpConfig = (data, method) => {
        if (method == "POST") {
            setConfig({
                method,
                Headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    // Utiliza o hook useEffect para executar uma função sempre que a URL fornecida muda
    useEffect(() => {

        // Define uma função assíncrona para buscar dados da URL fornecida
        const fetchData = async () => {
            setLoading(true)
            try {
                // Faz uma requisição para a URL
                const request = await fetch(url)
                // Converte a resposta da requisição para JSON
                const json = await request.json()
                // Atualiza a variável de estado data com os dados JSON
                setData(json)
            } catch (error) {
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados!")
            }
            setLoading(false)
        }

        // Chama a função fetchData
        fetchData()
        // A função dentro de useEffect será chamada novamente se a URL mudar
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config]
                const resquisicao = await fetch(...fetchOptions)
                const json = await resquisicao.json()
                setCallFetch(json)
            }
        }
        httpRequest()
    }, [config, method, url])

    // Retorna um objeto com a variável de estado data
    return { data, httpConfig, loading, error }
}