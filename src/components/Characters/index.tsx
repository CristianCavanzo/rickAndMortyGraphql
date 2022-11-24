import Link from 'next/link';
import React from 'react';
import type { Character } from 'src/service/graphql';
import styled from 'styled-components';

interface PropsCharacters {
	image: string;
}
interface Icharacters {
	id: Character['id'];
	name: Character['name'];
	image: Character['image'];
}

const Characters = styled.div<PropsCharacters>`
	background-image: url(${(props) => props.image});
`;

const CharactersComponent = ({ name, image, id }: Icharacters) => {
	return (
		<Characters image={image} className="flex h-80 w-80 items-end rounded-lg bg-cover ">
			<Link href={`/character/${id}`}>
				<div className="h-100 mb-4 flex h-max w-full rounded-md bg-gray-100 bg-opacity-10 bg-clip-padding p-4 text-white backdrop-blur-lg backdrop-filter">
					<h6>{name}</h6>
				</div>
			</Link>
		</Characters>
	);
};

export { CharactersComponent };
