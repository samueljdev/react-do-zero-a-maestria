import { useEffect, useState } from 'react'

export const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [itemId, setItemId] = useState(null)

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

        } else if (method === "DELETE") {
            setConfig({
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const request = await fetch(url)
                const json = await request.json()
                setData(json)
            } catch (error) {
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados!")
            }
            setLoading(false)
        }

        fetchData()

    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config]
                const resquisicao = await fetch(...fetchOptions)
                const json = await resquisicao.json()
                setCallFetch(json)

            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`
                const resquisicao = await fetch(deleteUrl, config)
                const json = await resquisicao.json()
                setCallFetch(json)
            }

        }

        httpRequest()

    }, [config, method, url])

    return { data, httpConfig, loading, error }
}