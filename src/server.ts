import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";

import { UserSchema, userResolvers, UserService } from "./schemas";
import { context } from './context';


const typeDefs = [
  UserSchema
]

const resolvers = [
  userResolvers,
]

const dataSources = {
  userService: new UserService(),
}

export const run = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, context, dataSources: () => dataSources });

  await createConnection();

  const { url } = await server.listen();

  console.log(`Server is ready at ${url}graphql`)
};

