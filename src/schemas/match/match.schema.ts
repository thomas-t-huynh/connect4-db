import { gql, IResolvers } from "apollo-server";

export const MatchSchema = gql`
  extend type Query {
    getUserMatches(userId: Int!): [Match!]
  }
  extend type Mutation {
    createMatch(player1Id: Int!, player2Id: Int!): Match!
    setMatchWinner(matchId: Int!, winner: String!): Match!
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

export const matchResolvers: IResolvers = {
  Query: {
    getUserMatches: (_, args, { dataSources }) => dataSources.matchService.getUserMatches(args),
  },
  Mutation: {
    createMatch: (_, args, { dataSources }) => dataSources.matchService.createMatch(args),
    setMatchWinner: (_, args, { dataSources }) => dataSources.matchService.setMatchWinner(args),
  }
}