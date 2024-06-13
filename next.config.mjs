/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cache.tonapi.io',
                port: '',
                pathname: '/imgproxy/**',
            },
        ],
    },
};

export default nextConfig;
