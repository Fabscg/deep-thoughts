// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
type Thought {
    _id:ID
    thoughtText:String
    createdAt:String
    username:String
    reactionCount:Int
}
type Reaction {
_id:ID
reactionBody:String
createdAt:String
username:[Reaction]
}


type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
}
`
// export the typeDefs
module.exports = typeDefs;