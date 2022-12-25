import React from 'react';
import { client } from 'src/service/client';
import { Character, GetAllCharactersHomeDocument } from 'src/service/graphql';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { CharactersComponent } from '@components/Characters';
import { LayoutHome } from '@components/Layout/LayoutHome';
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

export const getStaticProps: GetStaticProps<{
	characters: Character[];
	pages: number;
	count: number;
}> = async ({ params }) => {
	try {
		const {
			data: { characters: charactersQuery },
		} = await client.query({
			query: GetAllCharactersHomeDocument,
			variables: {
				id: Number(params.id),
			},
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
