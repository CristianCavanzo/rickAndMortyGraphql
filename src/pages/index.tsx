import React from 'react';
import { client } from 'src/service/client';
import { Characters, GetAllCharactersDocument } from 'src/service/graphql';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { CharactersComponent } from '@components/Characters';

export const getStaticProps: GetStaticProps<Characters> = async () => {
	try {
		const {
			data: { characters },
		} = await client.query<{ characters: Characters }>({
			query: GetAllCharactersDocument,
		});
		return { props: characters };
	} catch (error) {
		return { notFound: true };
	}
};

const Home = ({ results }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-6">
			{results.map((character, key) => (
				<CharactersComponent
					id={character.id}
					key={key}
					name={character.name}
					image={character.image}
				/>
			))}
		</div>
	);
};

export default Home;
