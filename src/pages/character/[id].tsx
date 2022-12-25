import React from 'react';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { client } from 'src/service/client';
import { Character, GetAllCharactersDocument, GetOneCharacterDocument } from 'src/service/graphql';
import Image from 'next/image';

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

export const getStaticProps: GetStaticProps<{ character: Character }> = async ({ params }) => {
	try {
		const { data } = await client.query({
			query: GetOneCharacterDocument,
			variables: { id: params.id },
		});
		const character = data.character as Character;
		return { props: { character } };
	} catch (error) {
		return { notFound: true };
	}
};

const Character = ({ character }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="p-6">
			<h3 className="text-4xl font-bold">{character.name}</h3>
			<Image
				src={character.image}
				width={300}
				height={300}
				alt={`Image of the character ${character.name}`}
			/>
		</div>
	);
};

export default Character;
