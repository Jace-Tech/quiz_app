const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql')
const StudentType = require('./types/StudentType')
const StudentModel = require('../model/User')
const QuizType = require('./types/QuizType')
const QuizModel = require('../model/Quiz')


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        quiz: { 
            type: QuizType,
            args: { quiz_id: { type: GraphQLString }},
            async resolve(parent, args) {
                const quiz = await QuizModel.findOne({ where: { quiz_id: args.quiz_id}})
                return quiz
            }
        },
        student: {
            type: StudentType,
            args: { student_id: { type: GraphQLString } },
            async resolve(parent, args) {
                console.log({ parent, args })
                const student = await StudentModel.findOne({where: {student_id: args.student_id}})
                return student    
            }
        },
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
})