import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import http from 'http';
import healthRouter from './routes/health';

dotenv.config();

const app: Application = express();

app.use(cors({
  origin: process.env.FRONTEND_URL ?? 'http://localhost:3000'
}));

app.use(express.json());
app.use('/health', healthRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  // eslint-disable-next-line no-console
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const rawPort: string | undefined = process.env.PORT;
const parsedPort: number = rawPort ? Number.parseInt(rawPort, 10) : 5000;
const port: number = Number.isNaN(parsedPort) ? 5000 : parsedPort;

const server: http.Server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    process.exit(0);
  });
});
