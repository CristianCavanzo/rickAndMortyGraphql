import { ApolloClient, InMemoryCache } from '@apollo/client';
console.log(process.env.NEXT_PUBLIC_SERVICE_URL);

export const client = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_SERVICE_URL}/graphql`,
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					character: {
						read(_, { args, toReference }) {
							return toReference({
								__typename: 'Avocado',
								id: args?.id,
							});
						},
					},
				},
			},
		},
	}),
});
