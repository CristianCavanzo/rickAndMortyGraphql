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
				<div className="h-100 bg-gray-100  m-auto mb-4 flex h-max w-10/12 rounded-md bg-opacity-10 bg-clip-padding p-4 text-black backdrop-blur-lg backdrop-filter">
					<h6>{name}</h6>
				</div>
			</Link>
		</Characters>
	);
};

export { CharactersComponent };
