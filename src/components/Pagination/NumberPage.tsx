import Link from 'next/link';
import React from 'react';

interface Props {
	number: number;
	actual: boolean;
}
const NumberPage = ({ number, actual }: Props) => {
	return (
		<Link href={`/${number}`} aria-current="page">
			<div
				className={`border-indigo-500 bg-indigo-50 text-indigo-600 relative z-10 inline-flex cursor-pointer items-center border px-4 py-2 text-sm font-medium focus:z-20 ${
					actual && 'border-black bg-blue-dark text-white'
				}`}
			>
				{number}
			</div>
		</Link>
	);
};

export { NumberPage };
