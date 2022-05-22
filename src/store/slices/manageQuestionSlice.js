import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    questions: []
}

const manageQuestionSlice = createSlice({
    name: "manageQuestion",
    initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload)
        },
        setQuestion: (state, action) => {
            state.questions = action.payload
        },
        removeQuestion: (state, action) => {
            state.questions = state.questions.filter(question => question.question_id !== action.payload)
        }
    }
})

export const { addQuestion, setQuestion, removeQuestion } = manageQuestionSlice.actions
export default manageQuestionSlice.reducer