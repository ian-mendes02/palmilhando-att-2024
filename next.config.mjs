/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    assetPrefix: process.env.NEXT_PUBLIC_DEV_ENV === 'false' ? process.env.NEXT_PUBLIC_ASSET_PREFIX : '',
    crossOrigin: 'anonymous'
};

export default nextConfig;
