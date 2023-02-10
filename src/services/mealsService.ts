'use strict';

import { Meal } from '../models/mealsModels.js';
import MealType from '../types/MealType.js';

export async function getAll() {
  try {
    const meals: MealType[] = await Meal.findAll();
    console.log(meals)

    return meals;
  } catch (error) {
    console.log(error);
  }
}

export async function getOne(mealId: number) {
  const meal = await Meal.findByPk(mealId);

  return meal;
}

export async function addOne(
  props: MealType,
) {
  const { idMeal } = props;
  const id = Number(idMeal);

  try {
    return await Meal.create({
      ...props,
      idMeal: id,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteOne(idMeal: number) {
  try {
    await Meal.destroy({
      where: {
        idMeal,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateOne(idMeal: number, props: Partial<MealType>) {
  try {
    await Meal.update(props, {
      where: {
        idMeal,
      },
    });

    const updatedMeal = await getOne(idMeal);

    return updatedMeal;
  } catch (error) {
    console.log(error);
  }
}
