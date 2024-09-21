
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
    remotePatterns: [
      {
        
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        
        protocol: 'https',
        hostname: 'oazys-food-ordering.s3.amazonaws.com',
      },
      {
        
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ]
  }
};
 
module.exports = withNextIntl(nextConfig);