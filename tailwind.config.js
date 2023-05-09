/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
	fontFamily: {
		body: [
			"Inter",
			"ui-sans-serif",
			"system-ui",
			"-apple-system",
			"system-ui",
			"Segoe UI",
			"Roboto",
			"Helvetica Neue",
			"Arial",
			"Noto Sans",
			"sans-serif",
			"Apple Color Emoji",
			"Segoe UI Emoji",
			"Segoe UI Symbol",
			"Noto Color Emoji",
		],
		sans: [
			"Inter",
			"ui-sans-serif",
			"system-ui",
			"-apple-system",
			"system-ui",
			"Segoe UI",
			"Roboto",
			"Helvetica Neue",
			"Arial",
			"Noto Sans",
			"sans-serif",
			"Apple Color Emoji",
			"Segoe UI Emoji",
			"Segoe UI Symbol",
			"Noto Color Emoji",
		],
	},
};
