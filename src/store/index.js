import { configureStore } from "@reduxjs/toolkit"
import answerReducer from "./slices/answerSlice"
import questionReducer from "./slices/questionSlice"
import userReducer from "./slices/usersSlice"
import manageQuestionsReducer from "./slices/manageQuestionSlice"

export const store = configureStore({
    reducer: {
        answers: answerReducer,
        questions: questionReducer,
        user: userReducer,
        manageQuestions: manageQuestionsReducer
    }
})
