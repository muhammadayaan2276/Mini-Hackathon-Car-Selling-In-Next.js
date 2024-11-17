/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'cache1.pakwheels.com', 
      'cache2.pakwheels.com',
      'cache3.pakwheels.com',
      'cache4.pakwheels.com'
    ],
  },
};

module.exports = nextConfig;
