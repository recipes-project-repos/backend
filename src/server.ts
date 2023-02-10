'use strict';
import express from 'express';
import cors from 'cors';
import { mealsRoute } from './routes/mealsRoute.js';

export const app = express();

app.use(cors());

app.use(mealsRoute);

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on localhost:3000');
  });
