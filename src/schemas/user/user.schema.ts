// Construct a schema, using GraphQL schema language
import { gql, IResolvers } from "apollo-server";

export const UserSchema = gql`
  type Query {
    getUser(id: Int!): User!
    getAllUsers: [User!]!
  }
  type Mutation {
    addUser(username: String!, password: String!, email: String!): User!
    removeUser(userId: Int!): Boolean!
  }
  type User {
    id: ID!
    username: String!
    email: String!
  }
`;

export const userResolvers: IResolvers = {
  Query: {
    getUser: (_, args, { dataSources }) => dataSources.userService.getUser(args),
    getAllUsers:(_0, _1, { dataSources }) => dataSources.userService.getAllUsers(),
  },
  Mutation: {
    addUser: (_, args, { dataSources }) => dataSources.userService.addUser(args),
    removeUser: (_, args, { dataSources }) => dataSources.userService.removeUser(args),
  }
}