import { createContext, useReducer } from "react"

export const TitleColorContext = createContext()

export const titleColorReduce = (state, action) => {

}

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReduce, { color: "purple" })

    return (
        <TitleColorContext.Provider value={{ ...state }}>
            {children}
        </TitleColorContext.Provider>
    )
}