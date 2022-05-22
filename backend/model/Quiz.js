const DB = require('./index')
const { DataTypes } = require('sequelize')

const Quiz = DB.define('quiz', {
    quiz_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    question_id: DataTypes.STRING,
    student_id: DataTypes.STRING,
    answers: DataTypes.JSON,
    score: DataTypes.INTEGER,
    finished: DataTypes.BOOLEAN,
})

module.exports = Quiz