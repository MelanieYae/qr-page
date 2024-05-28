/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'pbxt.replicate.delivery',
      'g4yqcv8qdhf169fk.public.blob.vercel-storage.com',
    ],
  },
   "env": { API_URL: "https://yours-project.vercel.app"} 
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/jobs`, {
  cache: "no-store",
  }),
};

module.exports = nextConfig;
