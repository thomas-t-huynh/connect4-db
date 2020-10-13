import { userResolvers } from '../schemas';
import { ResolversObject } from './index';

type ResolversObject<TObject> = TObject;

type QueryResolver<context=any> =  {
  user?: (_: context, schema: {[key:string]:context}, data: {[key:string]:context}) => any;
}

type MutationResolver<T> = {
  addUser?: (_: any, schema: ResolversObject, data: {}) => any;
}

type Mutation = {
  name: string;
  height: number;
}

export type Resolvers = ResolversObject<{
  Query?: QueryResolver;
  Mutation?: MutationResolver<Mutation>;
}>;

// you can also access types like objects with bracket notation.
// <Scalar["String"]>

const userResolver: Resolvers = {
  Query: {
    user: (_, { user }, { dataSource }) => user(dataSource)
  }

}

console.log(userResolver);


export interface UserArgs {
  username: string;
  password: string;
  email: string;
}
