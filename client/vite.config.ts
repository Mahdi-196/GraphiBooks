import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: process.env.PORT ? Number(process.env.PORT) : 3000, 
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    host: '0.0.0.0', 
    port: process.env.PORT ? Number(process.env.PORT) : 3000, 
    allowedHosts: ['graphibooks.onrender.com'],  
  },
});
