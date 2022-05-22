const QuizModel = require("../model/Quiz")
const { v4 } = require("uuid")

const handlePostQuiz =  async (req, res) => {
    const quizId = v4();

    try{
        const quiz = await QuizModel.create({
            ...req.body,
            quiz_id: quizId
        })

        res.status(201).json(quiz)
    }
    catch (err) {
        res.json({ error: err.message })
    }
}

const handleGetQuiz =  async (req, res) => {
    try{
        const quiz = await QuizModel.findAll()
        res.json(quiz)
    }
    catch (err) {
        res.json({ error: err.message })
    }
}


module.exports = {
    handlePostQuiz,
    handleGetQuiz
}