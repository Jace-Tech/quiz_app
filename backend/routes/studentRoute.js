const router = require('express').Router()
const { handleAddStudent, handleGetStudents } = require('../controller/studentController')

router.post('/', handleAddStudent)
router.get('/', handleGetStudents)


module.exports = router