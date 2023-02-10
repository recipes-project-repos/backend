'use strict';

import express from 'express';
import * as mealsController from '../controllers/mealsController';

export const mealsRoute = express.Router();

mealsRoute.get('/meals', mealsController.get);

mealsRoute.get('/meals/:mealId', mealsController.getById);

mealsRoute.post('/meals', express.json(), mealsController.add);

mealsRoute.delete('/meals/:mealId', mealsController.remove);

mealsRoute.patch('/meals/:mealId', express.json(), mealsController.update);
