export default function SearchIcon({
	width = "6",
	height = "6",
	color = "black",
}: any) {
	return (
		<svg
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			className={`h-${height} w-${width} text-${color}`}
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
			></path>
		</svg>
	);
}
