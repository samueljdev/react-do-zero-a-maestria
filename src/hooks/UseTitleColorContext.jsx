import { useContext } from "react"
import { TitleColorContext } from "../context/TitleColorContext"

export const UseTitleColorContext = () => {
    const context = useContext(TitleColorContext)
    if (!context) {
        console.log("Contexto não encontrato")
    }
    return context
}