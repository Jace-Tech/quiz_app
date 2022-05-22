const UserModel = require('../model/User')
const { hashSync } = require("bcrypt")

const generateStudentId = () => {
    const numbers = "0123456789";
    let id = "std_"

    for(let i = 0; i < 8; i++) {
        id += numbers.charAt(Math.random() * (numbers.length - 1))
    }

    return id
}

const handleGetStudents = async (req, res) => {
    try {
        const students = await UserModel.findAll()
        res.status(200).json(students)
    } 
    catch (err) {
        res.json({error: err.message})
    }
}

const handleAddStudent = async (req, res) => {
    const { password } = req.body 

    const hashedPassword = hashSync(password, 10)
    const studentId = generateStudentId()
    try {
        const student = await UserModel.create({
            ...req.body,
            password: hashedPassword,
            student_id: studentId
        })

        res.status(201).json(student)
    } 
    catch(err) {
        res.json({ error: err.message })
    }

}

module.exports = {
    handleAddStudent,
    handleGetStudents
}