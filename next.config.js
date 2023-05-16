/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: "http://localhost:3000",
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.gravatar.com",
				port: "",
				pathname: "/avatar/**",
			},
		],
	},
};

module.exports = nextConfig;
