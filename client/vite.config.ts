import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: process.env.PORT ? Number(process.env.PORT) : 3000, // Use the environment variable or fallback to 3000
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001', // Proxy requests to backend server
        changeOrigin: true,
        secure: false, // Disables SSL verification for the proxy
      },
    },
    allowedHosts: ['*'], // Allow all hosts to access the server
    watch: {
      usePolling: true, // Enable polling to detect changes (especially useful for Docker/CI environments)
    },
  },
  preview: {
    host: '0.0.0.0', // Allow preview to bind to any network interface
    port: process.env.PORT ? Number(process.env.PORT) : 3000, // Set port based on environment variable or default to 3000
    allowedHosts: ['*'], // Allow all hosts to access during preview
  },
});
