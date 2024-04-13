/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'user-images.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'github.com',
               // pathname: '/marwin1991/profile-technology-icons/'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'media.discordapp.net'
            },
            {
                protocol: 'https',
                hostname: 'assets.stickpng.com'
            }
            ],
    },
};
export default nextConfig;
