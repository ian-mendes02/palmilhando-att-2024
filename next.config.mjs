/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    assetPrefix: process.env.NEXT_PUBLIC_DEV_ENV == 'true' ? '' : process.env.NEXT_PUBLIC_ASSET_PREFIX_GLOBAL,
    crossOrigin: 'anonymous'
};

export default nextConfig;
