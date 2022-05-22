import { configureStore } from "@reduxjs/toolkit"
import answerReducer from "./slices/answerSlice"
import questionReducer from "./slices/questionSlice"
import manageQuestionsReducer from "./slices/manageQuestionSlice"

export const store = configureStore({
    reducer: {
        answers: answerReducer,
        questions: questionReducer,
        manageQuestions: manageQuestionsReducer
    }
})
