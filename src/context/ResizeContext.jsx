import { createContext, useEffect, useState } from "react"


export const ResizeContext = createContext()


const ResizeContextProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false)


    // Window Resize Function
    const handleResize = () => {
        if(window.innerWidth < 500) {
            setIsMobile(true)
        }
        else{
            setIsMobile(false)
        }
    }


    // Handle Window Resize
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <ResizeContext.Provider value={{ isMobile }}>
            { children }
        </ResizeContext.Provider>
    )
}


export default ResizeContextProvider