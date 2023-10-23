import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fileupload from "express-fileupload";

import { PORT } from './constants.js';
import { checkDBConnection } from "../config/db.js";
import apiRouter from '../routes/index.js';
import { loadSwagger } from './swagger.js';

export default () => {
  checkDBConnection()
  
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(fileupload());
  app.use(morgan('dev'));
  app.use('/media', express.static('media'));
  
  app.use('/api', apiRouter);
  
  loadSwagger(app)
  app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found.' });
    next();
  });
  
  app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
    next();
  });
  
  app.listen(PORT, () => {
    console.log(`Backend server is running on port! ${PORT}`);
  });
};
