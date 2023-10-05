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

const handleStartQuiz = async (req, res) => {
    const quiz_id = v4()

    try {
        const quiz = await QuizModel.create({
            ...req.body,
            quiz_id,
            finished: 0
        })

        res.json(quiz)
    } catch (err) {
        res.json({ error: err.message })
    }
}

const handleFinishQuiz = async (req, res) => {
    const { quiz_id } = req.body

    try {
        const quiz = await QuizModel.findOne({ where: { quiz_id: quiz_id }})
        if(!quiz) throw new Error("No quiz found")
        
        await QuizModel.update(quiz_id, {
            ...req.body
        })

        res.json({ status: 200, message: "Updated"})


        res.json(quiz)
    } catch (err) {
        res.json({ error: err.message })
    }
}


module.exports = {
    handlePostQuiz,
    handleGetQuiz,
    handleStartQuiz,
    handleFinishQuiz
}