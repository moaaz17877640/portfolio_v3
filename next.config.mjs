const isDev = process.env.NODE_ENV !== 'production'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  // Allow remote dev origins (e.g., Cloudflare tunnel) to access Next.js dev assets in future versions
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    // Allow any cloudflared tunnel subdomain
    /https?:\/\/.*\.trycloudflare\.com$/,
    // Allow any HTTP(S) origin in dev (broad, dev-only)
    /^https?:\/\/.+$/
  ],
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' }
    ]
  },
  // Dev-only permissive CORS headers to ease tunneling/proxying via cloudflared/NGROK
  async headers() {
    if (!isDev) return []
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,POST,PUT,PATCH,DELETE' },
          { key: 'Access-Control-Allow-Headers', value: 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization' },
          { key: 'Access-Control-Expose-Headers', value: 'Content-Length,Content-Range' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' }
        ]
      }
    ]
  }
};

export default nextConfig;
