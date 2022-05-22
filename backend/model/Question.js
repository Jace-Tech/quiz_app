const DB = require('./index')
const { DataTypes } = require('sequelize')

const Question = DB.define('question', {
    question_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: DataTypes.STRING,
    data: {
        type: DataTypes.JSON,
        allowNull: true
    }
})

module.exports = Question