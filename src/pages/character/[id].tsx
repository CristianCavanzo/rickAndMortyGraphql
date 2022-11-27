import React from 'react';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { client } from 'src/service/client';
import { GetAllCharactersDocument, GetOneCharacterDocument } from 'src/service/graphql';

export const getStaticPaths: GetStaticPaths = async () => {
	let paths = [];
	try {
		const characters = await client.query({ query: GetAllCharactersDocument });
		const charactersResult = characters.data.characters.results;
		paths = charactersResult.map(({ id }) => ({ params: { id: String(id) } }));
		return { paths, fallback: false };
	} catch (error) {
		return { paths, fallback: false };
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const {
			data: { character },
		} = await client.query({ query: GetOneCharacterDocument, variables: { id: params.id } });
		return { props: { character } };
	} catch (error) {
		return { notFound: true };
	}
};

const Character = ({ character }: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(character);
	return <div>{/* h3+Image/ */}</div>;
};

export default Character;
