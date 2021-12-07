import express from 'express';
import chalk from 'chalk';

// Base config
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    chalk.blue(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  )
);
