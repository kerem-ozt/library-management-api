import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { sequelize } from './src/models';
import db from './src/models/index';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from 'http';
import routes from './Routes';
import bodyParser from 'body-parser';
import session from 'express-session';

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

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
