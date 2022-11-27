import { Next } from '@components/svgs/Next';
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
			<div className="h-100 bg-gray-100  m-auto mb-4 flex h-max w-10/12 items-center justify-between rounded-md bg-white p-4 font-medium text-black backdrop-blur-lg backdrop-filter">
				<h6>{name}</h6>
				<Link href={`/character/${id}`}>
					<button className="grid h-8 w-8 place-content-center rounded-lg bg-blue">
						<Next className="scale-50" color="#2D5469" />
					</button>
				</Link>
			</div>
		</Characters>
	);
};

export { CharactersComponent };
