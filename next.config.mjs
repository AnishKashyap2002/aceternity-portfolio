/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.wallpapersafari.com",
            },
            {
                hostname: "wonderfulengineering.com",
            },
            {
                hostname: "images.unsplash.com",
            },
            {
                hostname: "api.microlink.io",
            },
        ],
    },
};

export default nextConfig;
