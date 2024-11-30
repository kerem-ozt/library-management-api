import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from 'http';
import routes from './Routes';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan('dev'));
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.decoded = {
    language: req.headers.language ? req.headers.language : 'en',
  };
  next();
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

app.use('/', routes);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
