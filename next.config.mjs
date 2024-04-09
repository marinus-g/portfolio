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
            }],
    },
};
export default nextConfig;
