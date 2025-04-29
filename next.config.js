/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http'
        hostname: 'example.com', // Your allowed domain
        port: '', // Leave empty unless a specific port is required
        pathname: '/path/to/your/images/**', // Or a more specific path if needed
      },
       {
        protocol: 'https', // or 'http'
        hostname: 'anotherdomain.com', // Another allowed domain
        port: '',
        pathname: '/another/path/**',
      },
      // ... add more patterns for other remote image sources
    ],
  },
}