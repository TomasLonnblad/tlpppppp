

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  cacheHandler:
    process.env.NODE_ENV === "production"
      ? "./custom-incremental-cache-handler.mjs"
      : undefined,
  cacheMaxMemorySize: 0,
  experimental: {
    taint: true
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [

    ]
  }
};

export default nextConfig;