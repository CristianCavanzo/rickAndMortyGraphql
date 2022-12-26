import { CharactersComponent } from '@components/Characters';
import { useRouter } from 'next/router';
import React from 'react';
import { Character } from 'src/service/graphql';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

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
							{(lastPage !== 0 && (
								<Link href={`/${lastPage}`}>
									<div className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex cursor-pointer items-center rounded-l-md border bg-white px-2 py-2 text-sm font-medium focus:z-20">
										<span className="sr-only">Previous</span>
										<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
									</div>
								</Link>
							)) || (
								<div className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex  items-center rounded-l-md border bg-white px-2 py-2 text-sm font-medium opacity-20 focus:z-20">
									<span className="sr-only">Previous</span>
									<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
								</div>
							)}
							{/* <a
								href="/"
								aria-current="page"
								className="border-indigo-500 bg-indigo-50 text-indigo-600 relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"
							>
								1
							</a>
							<a
								href="/"
								className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border bg-white px-4 py-2 text-sm font-medium focus:z-20"
							>
								2
							</a>
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
							{(canNext && (
								<Link href={`/${next}`}>
									<div
										className="
								border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex cursor-pointer items-center rounded-r-md border bg-white px-2 py-2 text-sm font-medium focus:z-20"
									>
										<span className="sr-only">Next</span>
										<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
									</div>
								</Link>
							)) || (
								<div
									className="
								border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex cursor-pointer items-center rounded-r-md border bg-white px-2 py-2 text-sm font-medium focus:z-20"
								>
									<span className="sr-only">Next</span>
									<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
								</div>
							)}
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export { LayoutHome };
