/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.example.com','avatars.githubusercontent.com','cdn.shopify.com','dummyjson.com','dummyimage.com','tailwindui.com'],
  },
  env: {
    MONGO_URI:"mongodb://localhost:27017/desinutri",
  },
 
}

module.exports = nextConfig
