/** @type {import('next').NextConfig} */
const { withAxiom } = require('next-axiom');
const nextConfig = withAxiom({
	reactStrictMode: true,
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
});

module.exports = nextConfig;
