import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react';

interface Props {
	link: string;
	direction: 'left' | 'rigth';
	disabled: boolean;
}

const Arrow = ({ link, direction, disabled }: Props) => {
	const sideContainer = (direction === 'left' && 'rounded-l-md') || 'rounded-r-md';
	if (disabled) {
		return (
			<div
				className={`border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex  items-center border bg-white px-2 py-2 text-sm font-medium opacity-20 focus:z-20 ${sideContainer}`}
			>
				<span className="sr-only">Previous</span>
				{direction === 'left' && <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />}
				{direction === 'rigth' && <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />}
			</div>
		);
	}
	return (
		<Link href={`/${link}`}>
			<div
				className={`border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex cursor-pointer items-center border bg-white px-2 py-2 text-sm font-medium focus:z-20 ${sideContainer}`}
			>
				<span className="sr-only">Previous</span>
				{direction === 'left' && <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />}
				{direction === 'rigth' && <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />}
			</div>
		</Link>
	);
};

export { Arrow };
