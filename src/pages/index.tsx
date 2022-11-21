import React, { useState } from 'react';
import { client } from 'src/service/client';
import { GetAllCharactersDocument } from 'src/service/graphql';

const Home = () => {
	const [character, setCharacter] = useState(undefined);
	const getAllCharacters = async () => {
		try {
			const response = await client.query({ query: GetAllCharactersDocument });
			console.log(response);
			setCharacter(response.data.characters);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<button className="" onClick={getAllCharacters}>
			Holassa
		</button>
	);
};

export default Home;
