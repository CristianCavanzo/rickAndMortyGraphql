import { ApolloProvider } from '@apollo/client';
import { Layout } from '@components/Layout';
import type { AppProps } from 'next/app';
import { client } from 'src/service/client';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}
