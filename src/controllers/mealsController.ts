'use strict';

import { Request, Response } from "express";
import * as mealsService from "../services/mealsService";
import MealType from "../types/MealType";

export const get = async(req: Request, res: Response) => {
  const meals = await mealsService.getAll();


  res.send(meals);
};

export const getById = async(req: Request, res: Response) => {
  const { mealId } = req.params;
  const foundMeal: MealType | null = await mealsService.getOne(Number(mealId));

  if (!foundMeal) {
    res.sendStatus(404);

    return;
  }

  res.send(foundMeal);
};

export const add = async(req: Request, res: Response) => {
  if (Object.keys(req.body).length < 14) {
    res.sendStatus(400);

    return;
  }

  const newMeal = await mealsService.addOne(req.body);

  res.statusCode = 201;
  res.send(newMeal);
};

export const remove = async(req: Request, res: Response) => {
  const { mealId } = req.params;
  const foundMeal = await mealsService.getOne(Number(mealId));

  if (!foundMeal) {
    res.sendStatus(404);

    return;
  }

  await mealsService.deleteOne(Number(mealId));

  res.sendStatus(204);
};

export const update = async(req: Request, res: Response) => {
  const { mealId } = req.params;
  // const { name } = req.body;

  const foundMeal = await mealsService.getOne(Number(mealId));

  if (!foundMeal) {
    res.sendStatus(404);

    return;
  }

  if (Object.keys(req.body).length === 0) {
    res.sendStatus(400);

    return;
  }

  const updatedMeal = await mealsService.updateOne(Number(mealId), req.body);

  res.send(updatedMeal);
};
