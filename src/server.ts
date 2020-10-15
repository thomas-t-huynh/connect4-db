import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";

import { 
  UserSchema, 
  userResolvers,
  UserService,
  MatchSchema,
  matchResolvers,
  MatchService
} from "./schemas";
import { context } from './context';


const typeDefs = [
  UserSchema,
  MatchSchema
]

const resolvers = [
  userResolvers,
  matchResolvers,
]

const dataSources = {
  userService: new UserService(),
  matchService: new MatchService(),
}

export const run = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, context, dataSources: () => dataSources });

  await createConnection();

  const { url } = await server.listen();

  console.log(`Server is ready at ${url}graphql`)
};

