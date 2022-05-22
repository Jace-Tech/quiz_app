import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    questions: []
}

const questionSlice = createSlice({
    name: 'answer',
    initialState,

    reducers: {
        addQuestions: (state, action) => {
            state.questions = action.payload
        }
    }
})

export const { addQuestions } = questionSlice.actions
export default questionSlice.reducer