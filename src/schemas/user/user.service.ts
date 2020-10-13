
import { User } from "./user.entity";
import { ApolloError } from 'apollo-server';
import { UserArgs } from '../../types';

// Provide resolver functions for your schema fields

export const UserResolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: number }) => {
      try {
        return await User.findOne({ where: { id } });
      } catch(error) {
        throw new ApolloError(error);
      }
    },
    getAllUsers: async () => {
      try {
        return await User.find();
      } catch(error) {
        throw new ApolloError(error);
      }
    }
  },
  Mutation: {
    addUser: async (_: any, args: UserArgs) => {
      const { username, password, email } = args;
      try {
        const user = User.create({
          username,
          password,
          email,
        });
        await user.save();
        return user;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    removeUser: async (_:any, args: { userId: number }) => {
      const { userId } = args;
      try {
        const { affected } = await User.delete({ id: userId });
        if (affected) {
          return true;
        }
        return false;
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};