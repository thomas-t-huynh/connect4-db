
// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server";

export const UserSchema = gql`
  type Query {
    getUser(id: Int!): User!
    getAllUsers: [User!]
  }
  type Mutation {
    addUser(username: String!, password: String!, email: String!): User!
    removeUser(userId: Int!): Boolean!
  }
  type User {
    id: Int!
    username: String!
    password: String!
    email: String!
  }
`;

// export const userResolvers: Resolvers = {
  
// }