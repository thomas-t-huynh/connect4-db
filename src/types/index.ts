// import { DataSource } from 'apollo-datasource';
// import { IResolvers } from 'apollo-server';

// type ResolversObject<TObject> = TObject;

// interface DataSources {
//   userService: {
//     getUser(args: any): any;
//     getAllUsers(): any;
//   }
// };

// interface IQuery {
//   getUser?: (_: any, args: any, dataSource: { dataSources: DataSources }) => any;
//   getAllUsers?: (_: any, dataSource: { dataSources: DataSources }) => any;
// }


// type MutationResolver = {
//   addUser?: (_: any, schema: ResolversObject<any>, data: {}) => any;
// }

// type Mutation = {
//   name: string;
//   height: number;
// }

// export interface Resolvers extends IResolvers {
//   Query: IQuery;
// };

// you can also access types like objects with bracket notation.
// <Scalar["String"]>

// export const userResolver: Resolvers = {
//   Query: {
//     getAllUsers: (_, { dataSources }) => dataSources.userService.getAllUsers()
//   }
// }

export interface UserArgs {
  username: string;
  password: string;
  email: string;
}
