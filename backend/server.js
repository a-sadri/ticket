import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import chalk from 'chalk';

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import mainRoutes from './routes/mainRoutes.js';
import userRoutes from './routes/userRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

// Base config
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

// Routes
app.use('/users', userRoutes);
app.use('/tickets', ticketRoutes);
app.use('/messages', messageRoutes);
app.use('/', mainRoutes);

// middleware
app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    chalk.blue(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  )
);
