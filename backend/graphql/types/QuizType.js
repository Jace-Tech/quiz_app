
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } = require("graphql")
const StudentType = require("./StudentType")
const UserModel = require("../../model/User")
const QuestionType = require("./QuestionType")
const Question = require("../../model/Question")

const QuizType = new GraphQLObjectType({
    name: "Quiz",
    fields: () => ({
        answers: { type: GraphQLString },
        score: { type: GraphQLInt },
        quiz_id: { type: GraphQLString },
        question_id: { type: GraphQLString },
        student_id: { type: GraphQLString},
        finished: { type: GraphQLBoolean },
        question: { 
            type: QuestionType,
            async resolve(parent, args) {
                const question = await Question.findOne({ where: { question_id: parent.question_id }})
                return question
            }
        }
    })
})


module.exports = QuizType