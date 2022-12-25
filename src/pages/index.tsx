import React from 'react';
import { client } from 'src/service/client';
import { Character, GetAllCharactersHomeDocument } from 'src/service/graphql';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { LayoutHome } from '@components/Layout/LayoutHome';

export const getStaticProps: GetStaticProps<{
	characters: Character[];
	pages: number;
	count: number;
}> = async () => {
	try {
		const {
			data: { characters: charactersQuery },
		} = await client.query({
			query: GetAllCharactersHomeDocument,
		});
		const characters = charactersQuery.results as Character[];
		const pages = charactersQuery.info.pages;
		const count = charactersQuery.info.count;
		return {
			props: {
				characters,
				pages: pages,
				count: count,
			},
		};
	} catch (error) {
		return { notFound: true };
	}
};

const Home = ({ characters, count }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div>
			<LayoutHome characters={characters} totalCharacters={count} />
		</div>
	);
};

export default Home;
