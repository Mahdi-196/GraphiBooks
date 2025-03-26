import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: process.env.PORT ? Number(process.env.PORT) : 3000, // Use the environment variable for port or fallback to 3000
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001', // Proxy requests to the backend
        changeOrigin: true,
        secure: false,
      },
    },
    allowedHosts: ['*'], // Allow all hosts
  },
  preview: {
    host: '0.0.0.0', // Bind to all network interfaces for preview
    port: process.env.PORT ? Number(process.env.PORT) : 3000, // Use the environment variable for port or fallback to 3000
    allowedHosts: ['*'], // Allow all hosts in preview mode
  },
});
