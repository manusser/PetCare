/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: "https://pet-care-backend.vercel.app",
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
