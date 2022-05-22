const { GraphQLObjectType, GraphQLString } = require("graphql")
const QuizType = require("./QuizType")
const Quiz = require("../../model/Quiz")

const StudentType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        student_id: { type: GraphQLString },
        phone: { type: GraphQLString },
        password: { type: GraphQLString },
        quiz: {
            type: QuizType,
            async resolve(parent, args) {
                const quizzes = await Quiz.findAll({ where: { student_id: parent.student_id }})
                return quizzes
            }
        }
    })
})

module.exports = StudentType 