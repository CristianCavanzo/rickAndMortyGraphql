import { useRouter } from 'next/router';
import React, { cloneElement, Fragment } from 'react';
import { NumberPage } from './NumberPage';

interface Props {
	limit: number;
}
const Pagination = ({ limit }: Props) => {
	const router = useRouter();
	const actualPage = Number(router.query.id) || 1;
	const limits: number[] = [1, limit];
	const pages = [];
	const medium = limits[0] + 2;
	const maxPagination = 5;

	const lastPagination = limits[1] - 2;
	if (actualPage <= medium) {
		for (let i = 1; i <= maxPagination; i++) {
			pages.push(i);
		}
	} else if (actualPage < lastPagination) {
		let addPage = actualPage;
		let reducePage = actualPage;
		const tenMore = (actualPage + 10 > limits[1] && limits[1]) || actualPage + 10;
		const tenLess = (actualPage - 10 < 0 && 1) || actualPage - 10;
		for (let i = 1; i <= 2; i++) {
			if (!(addPage > limits[1] - 1)) {
				pages.push(++addPage);
			}
			pages.push(--reducePage);
		}
		pages.push(actualPage);
		pages.push(tenMore);
		pages.push(tenLess);
		pages.sort((a, b) => a - b);
	} else {
		let nextPage = actualPage + 1;
		let lastPage = actualPage;
		for (let i = nextPage; i <= limits[1]; i++) {
			pages.push(nextPage);
			++nextPage;
		}
		while (pages.length < 6) {
			pages.push(--lastPage);
		}
		pages.push(actualPage);
		pages.sort((a, b) => a - b);
	}
	// para cristian, debes pensar en como hacer esa paginacion tu puedes campeon UwU
	return (
		<Fragment>
			{pages.map((page) => (
				<NumberPage number={page} key={page} actual={actualPage === page} />
			))}
		</Fragment>
	);
};

export { Pagination };
