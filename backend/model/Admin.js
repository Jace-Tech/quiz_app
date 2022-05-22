const DB = require("../model/")
const { DataTypes } = require("sequelize")

const AdminModel = DB.define("admin", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    }, 
    token: {
        type: DataTypes.TEXT, 
        allowNull: true
    }
})

module.exports = AdminModel