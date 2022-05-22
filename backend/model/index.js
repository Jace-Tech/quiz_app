const { Sequelize } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    dialect: 'mysql',
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
})

module.exports = sequelize