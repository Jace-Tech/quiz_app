const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')


const QuestionType = new GraphQLObjectType({
    name: "Question",
    fields: () => ({
        question_id: { type: GraphQLString },
        name: { type: GraphQLString},
        time_per_question: { type: GraphQLInt },
        data: { type: GraphQLString },
    })
})

module.exports = QuestionType