import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    answer: []
}

const answerSlice = createSlice({
    name: 'answer',
    initialState,

    reducers: {
        addAnswer: (state, action) => {
            state.answer.push(action.payload)
        },
        clearAnswers: (state) => {
            state.answer = []
        }
    }
})

export const { addAnswer, clearAnswers } = answerSlice.actions
export default answerSlice.reducer