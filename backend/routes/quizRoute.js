const router = require('express').Router()
const { handlePostQuiz, handleGetQuiz, handleStartQuiz, handleFinishQuiz } = require('../controller/quizController')

router.post('/', handlePostQuiz)
router.get('/', handleGetQuiz)
router.post('/start', handleStartQuiz)
router.post('/end', handleFinishQuiz)


module.exports = router