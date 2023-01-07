/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src nulo-hotels.vercel.app;
  style-src 'self' nulo-hotels.vercel.app;
  font-src 'self';  
`

const nextConfig = {
 reactStrictMode: true,
 swcMinify: true,
 webpack(config) {
  config.module.rules.push({
   test: /\.svg$/,
   use: ['@svgr/webpack'],
  })

  return config
 },
 poweredByHeader: false,
 async headers() {
  return [
   {
    source: '/hotels/listings',
    headers: [
     {
      key: 'Content-Security-Policy',
      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
     },
    ],
   },
  ]
 },
}

module.exports = nextConfig
