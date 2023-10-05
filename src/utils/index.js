import { questionsData } from "../data"


export const MAX_SECONDS_PER_QUESTION = 45
export const MARK_PER_QUESTION = (100 / questionsData.length).toFixed(1) 

export const showAlert = (toast, message, type) => {
    toast({
        title: message,
        status: type,
        isClosable: true,
        duration: 5000,
    })
}   