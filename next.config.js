// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'task.com']
//     },
//     experimental: {
//       serverActions:true,
//       serverComponentsExternalPackages:['mongoose'],
//       serverComponentsExternalPackages: ['cloudinary', 'graphql-request'],
//     },
//     eslint: {
//       // Warning: This allows production builds to successfully complete even if
//       // your project has ESLint errors.
//       ignoreDuringBuilds: true
//     }
//   }
  
//   module.exports = nextConfig


  /** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains: ['m.media-amazon.com']
  }
}

module.exports = nextConfig