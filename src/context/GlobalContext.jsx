import { createContext } from "react"
import ResizeContextProvider from "./ResizeContext"


const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={""}>
            <ResizeContextProvider>
                { children }
            </ResizeContextProvider>
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider