import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config.js';

const app: Express = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes (to be added)
app.use('/api', (_req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

export default app;
