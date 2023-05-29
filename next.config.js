/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: "https://pet-care-backend.vercel.app",
		// API_URL: "http://localhost:3000",
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.gravatar.com",
				port: "",
				pathname: "/avatar/**",
			},
			{
				protocol: "https",
				hostname: "img1.picmix.com",
				port: "",
				pathname: "/*/**",
			},
			{
				protocol: "https",
				hostname: "api.multiavatar.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
