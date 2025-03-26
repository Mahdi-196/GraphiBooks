import express from 'express';
import path from 'node:path';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import db from './config/connection.js';
import { typeDefs, resolvers } from './schemas/index.js';
import { authenticateToken } from './services/auth.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = parseInt(process.env.PORT as string, 10) || 3001;

const corsOptions = {
  origin: 'https://graphibooks.onrender.com/',
  credentials: true,
};


app.use(cors(corsOptions));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => authenticateToken(req),
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({
    app: app as any,
    cors: false,
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(path.resolve(), '../client/build')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(path.resolve(), '../client/build/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`🌍 Server ready at http://localhost:${port}${server.graphqlPath}`);
    });
  });
};

startServer();
