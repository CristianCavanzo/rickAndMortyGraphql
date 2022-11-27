export interface Errors {
	error: boolean;
	message?: string;
	data?: unknown;
}

export interface Icons {
	width?: number;
	heigth?: number;
	color?: string;
	className: HTMLAttributes;
}
