const DB = require('./index')
const { DataTypes } = require('sequelize')

const Student = DB.define('student', {
    student_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    phone:  {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: DataTypes.STRING,
    dob: DataTypes.DATE,
})

module.exports = Student