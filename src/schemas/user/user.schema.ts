// Construct a schema, using GraphQL schema language
import { gql, IResolvers } from "apollo-server";
// import { Resolvers } from "@/types";

export const UserSchema = gql`
  type Query {
    getUser(id: Int!): User!
  }
  type User {
    id: Int!
    username: String!
    password: String!
    email: String!
  }
`;

export const userResolvers: IResolvers = {
  Query: {
    getUser: (_, args, { dataSources }) => dataSources.userService.getUser(args)
  }
}

// type Mutation {
//   addUser(username: String!, password: String!, email: String!): User!
//   removeUser(userId: Int!): Boolean!
// }
// type User {
//   id: Int!
//   username: String!
//   password: String!
//   email: String!
// }