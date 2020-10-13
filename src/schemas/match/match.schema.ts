import { gql } from "apollo-server";

export const MatchSchema = gql`
  extend type Mutation {
    createMatch(player1Id: Int!, player2Id: Int!): Match!
  }
  type Match {
    id: Int!
    player1: String!
    player2: String!
    users: [User!]
    winner: String!
    createdAt: String!
  }
`;

// export const userResolvers: Resolvers = {
  
// }