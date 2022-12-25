import React from 'react';
import { client } from 'src/service/client';
import { Characters, GetAllCharactersHomeDocument } from 'src/service/graphql';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { CharactersComponent } from '@components/Characters';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export const getStaticProps: GetStaticProps<Characters> = async () => {
	try {
		const {
			data: { characters },
		} = await client.query<{ characters: Characters }>({
			query: GetAllCharactersHomeDocument,
		});
		return { props: characters };
	} catch (error) {
		return { notFound: true };
	}
};

const Home = ({ results }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div>
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
			<div className="border-gray-200 flex items-center justify-between border-t bg-white px-4 py-3 sm:px-6">
				<div className="flex flex-1 justify-between sm:hidden">
					<a
						href="#"
						className="border-gray-300 text-gray-700 hover:bg-gray-50 relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium"
					>
						Previous
					</a>
					<a
						href="#"
						className="border-gray-300 text-gray-700 hover:bg-gray-50 relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium"
					>
						Next
					</a>
				</div>
				<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
					<div>
						<p className="text-gray-700 text-sm">
							Showing <span className="font-medium">1</span> to{' '}
							<span className="font-medium">10</span> of <span className="font-medium">97</span>{' '}
							results
						</p>
					</div>
					<div>
						<nav
							className="isolate inline-flex -space-x-px rounded-md shadow-sm"
							aria-label="Pagination"
						>
							<a
								href="#"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center rounded-l-md border bg-white px-2 py-2 text-sm font-medium focus:z-20"
							>
								<span className="sr-only">Previous</span>
								<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
							</a>
							{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
							<a
								href="#"
								aria-current="page"
								className="border-indigo-500 bg-indigo-50 text-indigo-600 relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"
							>
								1
							</a>
							<a
								href="#"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border bg-white px-4 py-2 text-sm font-medium focus:z-20"
							>
								2
							</a>
							<a
								href="#"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative hidden items-center border bg-white px-4 py-2 text-sm font-medium focus:z-20 md:inline-flex"
							>
								3
							</a>
							<span className="border-gray-300 text-gray-700 relative inline-flex items-center border bg-white px-4 py-2 text-sm font-medium">
								...
							</span>
							<a
								href="#"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative hidden items-center border bg-white px-4 py-2 text-sm font-medium focus:z-20 md:inline-flex"
							>
								8
							</a>
							<a
								href="#"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border bg-white px-4 py-2 text-sm font-medium focus:z-20"
							>
								9
							</a>
							<a
								href="#"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border bg-white px-4 py-2 text-sm font-medium focus:z-20"
							>
								10
							</a>
							<a
								href="#"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center rounded-r-md border bg-white px-2 py-2 text-sm font-medium focus:z-20"
							>
								<span className="sr-only">Next</span>
								<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
							</a>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
