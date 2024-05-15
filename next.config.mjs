/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    assetPrefix: process.env.NEXT_PUBLIC_DEV_ENV == 'true' ? '' : 'https://palmilhasterapeuticas.com.br/evento2024',
    crossOrigin: 'anonymous'
};

export default nextConfig;
