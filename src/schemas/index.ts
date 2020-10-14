export * from './user';
export * from './match';
import { gql, IResolvers } from 'apollo-server';

export const Root = gql`
	# TypeDefs
	type Query {
		"""Test query for health checks."""
		testQuery: String
	}
	
	type Mutation {
		"""Test mutation for health checks."""
		testMutation: String
	}
`

/* Root Resolvers */
export const rootResolvers: IResolvers = {
	Query: {
		testQuery: () => 'Test query succeeded!',
	},
	Mutation: {
		testMutation: () => 'Test mutation succeeded!',
	},
}