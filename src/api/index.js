const BASE_URL = "http://localhost:5000"

const generateOptions = (body, method = "POST") => {
    return {
        method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }

    }
}


export const createQuestion = async (data) => {
    const options = generateOptions({name: data})
    try {
        const request = await fetch(`${BASE_URL}/question`, options)
        const response = await request.json()
        return response
    }
    catch(err) {
        return {
            error: err.message
        }
    }

}

export const fetchQuestions = async (data) => {
    try {
        const request = await fetch(`${BASE_URL}/question`)
        const response = await request.json()
        return response
    }
    catch(err) {
        return {
            error: err.message
        }
    }

}

export const deleteQuestion = async (id) => {
    try {
        const request = await fetch(`${BASE_URL}/question/${id}`, { method: 'DELETE'})
        const response = await request.json()
        return response
    }
    catch(err) {
        return {
            error: err.message
        }
    }

}