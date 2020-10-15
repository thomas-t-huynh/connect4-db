import { DataSource } from 'apollo-datasource';
import { User } from "./user.entity";
import { ApolloError } from 'apollo-server';
import { UserArgs } from '@/types';
import { ProducedContext } from '@/context';

export class UserService extends DataSource<ProducedContext> {
  
  getUser({ id }: { id: number }) {
    try {
      return User.findOne({ where: { id } });
    } catch(error) {
      throw new ApolloError(error);
    }
  }

  getAllUsers() {
    try {
      return User.find();
    } catch(error) {
      throw new ApolloError(error);
    }
  }

  async addUser(args: UserArgs) {
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
  }

  async removeUser(args: { userId: number }) {
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