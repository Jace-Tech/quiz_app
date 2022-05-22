import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard'
import EndQuiz from './pages/EndQuiz'
import Home from './pages/Home'
import QuestionPage from './pages/QuestionPage'
import ManageQuiz from './pages/admin/ManageQuiz'
import ManageQuestions from './pages/admin/ManageQuestions'
import QuestionDetails from './pages/admin/QuestionDetails'

const App = () => {

    const routes = [
        {path: '/', component: <Home /> },
        {path: '/question', component: <QuestionPage /> },
        {path: '/endquiz', component: <EndQuiz /> },
        {path: '/admin/', component: <Dashboard /> },
        {path: '/admin/question', component: <ManageQuestions /> },
        {path: '/admin/question/:id', component: <QuestionDetails /> },
        {path: '/admin/quiz', component: <ManageQuiz /> },
    ]

    return (
        <Box h={"100vh"} w={"100%"}>
            <Routes>
                { routes.map((route, index) => <Route path={route.path} key={`${index}-${route.path}`} element={route.component} />)}
            </Routes>
        </Box>
    )
}

export default App    


                                            


