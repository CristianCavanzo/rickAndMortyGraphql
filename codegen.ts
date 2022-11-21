import type { CodegenConfig } from '@graphql-codegen/cli';
const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://rickandmortyapi.com/graphql',
	documents: './src/service/queries.graphql',
	generates: {
		'./src/service/': {
			preset: 'client',
			plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
		},
	},
};
export default config;
