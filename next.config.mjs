/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // TypeScript configuration
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  
  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
  // Images configuration
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Enable experimental features
  experimental: {
    serverActions: false, // Disable server actions for Vercel compatibility
    optimizePackageImports: [
      'react-icons',
      'lucide-react',
      '@radix-ui/react-*',
    ],
    serverComponentsExternalPackages: [
      '@prisma/client', 
      'bcryptjs',
      'tailwindcss-animate',
      '@tailwindcss/typography'
    ],
  },
  
  // Configuración de webpack
  webpack: (config) => {
    // Manejar importaciones de SVG
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  
  // Modo estricto de React
  reactStrictMode: true,
  
  // Extensiones de página permitidas
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Minificación con SWC (más rápida que Terser)
  swcMinify: true,
  
  // Desactivar source maps en producción para mayor velocidad
  productionBrowserSourceMaps: false,
  
  // Configuración de encabezados de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
