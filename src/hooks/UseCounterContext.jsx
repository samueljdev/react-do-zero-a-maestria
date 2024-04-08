import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

export const UseCounterContext = () => {
    const context = useContext(CounterContext)

    if (!context) {
        console.log("Contexto não encontrato")
    }
    return context
}
