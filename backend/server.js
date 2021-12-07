import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import mainRoutes from './routes/mainRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';

// Base config
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

// Routes
app.use('/tickets', ticketRoutes);
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
