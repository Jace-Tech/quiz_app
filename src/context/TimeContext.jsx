import { useInterval } from "@chakra-ui/react"
import { createContext, useState, useEffect } from "react"
import { MAX_SECONDS_PER_QUESTION } from "../utils"


export const TimeContext = createContext()

const TimeContextProvider = ({ children }) => {
    const [time, setTime] = useState(MAX_SECONDS_PER_QUESTION)


    useEffect(() => {
        setCounter(time)
    }, [time])

    return (
        <TimeContext.Provider value={{time, setTime, counter}}>
            { children }
        </TimeContext.Provider>
    )
}

export default TimeContextProvider