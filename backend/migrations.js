const DB = require("./model/")

const QuizModel = require("./model/Quiz")
const UserModel = require("./model/User")
const QuestionModel = require("./model/Question")
const AdminModel = require("./model/Admin")


DB.sync({ force: true })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })