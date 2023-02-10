'use strict';
import express from 'express';
import cors from 'cors';
import { mealsRoute } from './routes/mealsRoute';

export const app = express();

app.use(cors());

app.use(`http://localhost:3000`, mealsRoute);

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on localhost:3000');
  });
