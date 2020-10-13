import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";

import { MatchSchema, UserSchema, UserResolvers, MatchResolvers } from "./schemas";

const typeDefs = [
  MatchSchema,
  UserSchema
]

const resolvers = [
  UserResolvers,
  MatchResolvers
]

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await createConnection();

  const { url } = await server.listen();

  console.log(`Server is ready at ${url}graphql`)
};

startServer();