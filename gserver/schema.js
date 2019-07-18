const { makeExecutableSchema } = require('graphql-tools');
const { myResolvers } = require('./resolvers');

const typeDefs = `
type Channel {
  id: ID!                # "!" denotes a required field
  name: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
  channels: [Channel]    # "[]" means this is a list of channels
}

# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels
  addChannel(name: String!): Channel
}
`;

const mytypeDefs = `
scalar JSON

type Student {
  Name: String
  LastName: String
  Id: ID!
  Address: String
  Description: String
  Marks: JSON
}

type Subject {
  Name: String
  Teacher: String
  Id: ID!
  Room: String
  Description: String
  Dates: [String]
}

type Query {
  students: [Student]    # "[]" means this is a list of channels
  subjects: [Subject]
}

type Mutation {
  addStudent(name: String!, surname: String!, address: String, description: String): Student
}
`;

const mySchema = makeExecutableSchema({ typeDefs: mytypeDefs, resolvers: myResolvers });

module.exports = { mySchema };
