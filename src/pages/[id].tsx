import React from 'react';
import { client } from 'src/service/client';
import { Characters, GetAllCharactersHomeDocument } from 'src/service/graphql';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { CharactersComponent } from '@components/Characters';

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data } = await client.query({
			query: GetAllCharactersHomeDocument,
		});
		const numberOfPages = data.characters.info.pages;
		const paths = [];
		for (let i = 1; i < numberOfPages; i++) {
			paths.push({
				params: {
					id: String(i),
				},
			});
		}
		return { paths, fallback: 'blocking' };
	} catch (error) {
		return { paths: [], fallback: 'blocking' };
	}
};

export const getStaticProps: GetStaticProps<Characters> = async ({ params }) => {
	try {
		const {
			data: { characters },
		} = await client.query<{ characters: Characters }>({
			query: GetAllCharactersHomeDocument,
			variables: {
				id: Number(params.id),
			},
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
