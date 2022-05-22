const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { graphqlHTTP } = require('express-graphql')


const quizRoute = require('./routes/quizRoute')
const questionRoute = require('./routes/questionRoute')
const studentRoute = require('./routes/studentRoute')
const authRoute = require('./routes/authRoute')
const graphqlSchema = require('./graphql/index')


const app = express()


// MIDDLEWARES
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// ROUTES
app.use("/quiz", quizRoute)
app.use("/question", questionRoute)
app.use("/student", studentRoute)
app.use("/auth", authRoute)

// PROTECTED ROUTE
app.use("/auth", authRoute)

// GRAPHQL ROUTE
app.use("/graphql", graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
}))


module.exports = app