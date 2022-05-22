const QuestionModel = require("../model/Question")
const { v4 } = require("uuid")


const handleGetQuestion = async (req, res) => {
    try {
        const questions = await QuestionModel.findAll()
        res.status(200).json(questions)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const handleDeleteQuestion = async (req, res) => {
    const { id } = req.params
    try {
        const question = await QuestionModel.findOne({ where: { question_id: id }})
        await question.destroy()
        res.status(200).json(question)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const handleGetOneQuestion = async (req, res) => {
    const { id } = req.params
    try {
        const questions = await QuestionModel.findOne({ where: {question_id: id} })
        res.status(200).json(questions)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const handlePostQuestion = async (req, res) => {
    console.log(req.body)
    const questionId = v4()

    try {
        const questionData = await QuestionModel.create({
            ...req.body,
            question_id: questionId
        })

        res.status(201).json(questionData)
    } 
    catch (err) {
        console.log({err})
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    handlePostQuestion,
    handleGetQuestion,
    handleGetOneQuestion,
    handleDeleteQuestion
}