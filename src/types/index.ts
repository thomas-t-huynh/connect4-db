type ResolversObject<TObject> = TObject;

type DataSources = {
  UserService: {
    getUser(args: any): any;
    getAllUsers(): any;
  }
};

type QueryResolver<context=any> =  {
  getUser?: (_: context, args: {[key:string]:context}, dataSources: { dataSource: DataSources }) => any;
  getAllUsers?: (_: context, dataSources: { dataSource: DataSources }) => any;
}

type MutationResolver<T> = {
  addUser?: (_: any, schema: ResolversObject<T>, data: {}) => any;
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
    getUser: (_, args, { dataSource }) => dataSource.UserService.getUser(args),
    getAllUsers: (_, { dataSource }) => dataSource.UserService.getAllUsers()
  }

}

export interface UserArgs {
  username: string;
  password: string;
  email: string;
}
