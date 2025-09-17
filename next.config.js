/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com']
  },
  trailingSlash: true,
  env: {
    SMTP_HOST: process.env.SMTP_HOST || 'smtp.example.com',
    SMTP_PORT: process.env.SMTP_PORT || '587',
    SMTP_USER: process.env.SMTP_USER || 'user@example.com',
    SMTP_PASS: process.env.SMTP_PASS || 'password',
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'hello@elandlmaintenance.co.uk',
  },
};

module.exports = nextConfig;