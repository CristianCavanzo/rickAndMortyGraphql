import { Icons } from 'index';
import React from 'react';

const Next = ({ color, className }: Icons) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill={color}
			height="48"
			width="48"
			className={className}
		>
			<path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z" />
		</svg>
	);
};

export { Next };
