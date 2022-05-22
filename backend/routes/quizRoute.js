const router = require('express').Router()
const { handlePostQuiz, handleGetQuiz } = require('../controller/quizController')

router.post('/', handlePostQuiz)
router.get('/', handleGetQuiz)


module.exports = router