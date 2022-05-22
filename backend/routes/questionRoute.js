const router = require('express').Router()
const { handlePostQuestion, handleGetQuestion, handleGetOneQuestion, handleDeleteQuestion } = require('../controller/questionController')

router.post('/', handlePostQuestion)
router.get('/', handleGetQuestion)
router.get('/:id', handleGetOneQuestion)
router.delete('/:id', handleDeleteQuestion)


module.exports = router