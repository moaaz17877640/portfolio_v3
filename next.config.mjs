const isDev = process.env.NODE_ENV !== 'production'
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = repository === 'moaaz17877640.github.io'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  // Allow remote dev origins (e.g., Cloudflare tunnel) to access Next.js dev assets in future versions
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
  allowedDevOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  output: 'export',
  trailingSlash: true,
  basePath: repository && !isUserSite ? `/${repository}` : '',
  assetPrefix: repository && !isUserSite ? `/${repository}/` : '/',
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' }
    ]
  },
};

export default nextConfig;
