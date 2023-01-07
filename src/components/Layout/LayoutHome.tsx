import { CharactersComponent } from '@components/Characters';
import { useRouter } from 'next/router';
import React from 'react';
import { Character } from 'src/service/graphql';
import Link from 'next/link';
import { Arrow } from '@components/Icons/Arrow';
import { NumberPage } from '@components/Pagination/NumberPage';
import { Pagination } from '@components/Pagination';

const LayoutHome = ({
	characters,
	totalCharacters,
}: {
	characters: Character[];
	totalCharacters: number;
}) => {
	const router = useRouter();
	const stay = Number(router.query.id as string) || 1;
	const lastPage: number = stay - 1;
	const next = stay + 1;
	const nextCount = stay * 20;
	const canNext = !(nextCount > totalCharacters);
	return (
		<div>
			<div className="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-6">
				{characters.map((character, key: number) => (
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
					<Link href="/">
						<div className="border-gray-300 text-gray-700 hover:bg-gray-50 relative inline-flex cursor-pointer items-center rounded-md border bg-white px-4 py-2 text-sm font-medium">
							Previous
						</div>
					</Link>
					<Link
						href="/"
						className="border-gray-300 text-gray-700 hover:bg-gray-50 relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium"
					>
						<div className="border-gray-300 text-gray-700 hover:bg-gray-50 relative inline-flex cursor-pointer items-center rounded-md border bg-white px-4 py-2 text-sm font-medium">
							Next
						</div>
					</Link>
				</div>
				<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
					<div>
						<p className="text-gray-700 text-sm">
							Showing <span className="font-medium">{nextCount - 20 || 1}</span> to{' '}
							<span className="font-medium">
								{nextCount > totalCharacters ? totalCharacters : nextCount}{' '}
							</span>{' '}
							of <span className="font-medium">{totalCharacters}</span> results
						</p>
					</div>
					<div>
						<nav
							className="isolate inline-flex -space-x-px rounded-md shadow-sm"
							aria-label="Pagination"
						>
							<Arrow disabled={lastPage === 0} link={`${lastPage}`} direction="left" />
							<Pagination limit={Math.ceil(totalCharacters / 20)} />
							{/* 
							
							<a
								href="/"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative hidden items-center border bg-white px-4 py-2 text-sm font-medium focus:z-20 md:inline-flex"
							>
								3
							</a>
							<span className="border-gray-300 text-gray-700 relative inline-flex items-center border bg-white px-4 py-2 text-sm font-medium">
								...
							</span>
							<a
								href="/"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative hidden items-center border bg-white px-4 py-2 text-sm font-medium focus:z-20 md:inline-flex"
							>
								8
							</a>
							<a
								href="/"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border bg-white px-4 py-2 text-sm font-medium focus:z-20"
							>
								9
							</a>
							<a
								href="/"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border bg-white px-4 py-2 text-sm font-medium focus:z-20"
							>
								10
							</a> */}

							<Arrow disabled={!canNext} link={`${next}`} direction="rigth" />
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export { LayoutHome };
