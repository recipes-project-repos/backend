'use strict';
import { DataTypes } from "sequelize";
import { Sequelize } from 'sequelize';
import MealType from "../types/MealType";

const sequelize = new Sequelize();

export const Meal= sequelize.define<MealType>('Meal', {
  idMeal: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  strMeal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strDrinkAlternate: {
    type: DataTypes.STRING,
  },
  strCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strArea: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strInstructions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strMealThumb: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strTags: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strYoutube: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strIngredient2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strIngredient3: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient4: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient5: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient6: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient7: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient8: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient9: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient10: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient11: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient12: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
    strIngredient13: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient14: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient15: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient16: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient17: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient18: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient19: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strIngredient20: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strMeasure2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strMeasure3: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure4: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure5: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure6: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure7: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure8: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure9: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure10: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure11: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure12: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure13: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure14: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure15: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure16: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure17: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure18: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure19: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strMeasure20: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strSource: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  strImageSource: {
    type: DataTypes.STRING,
  },
  strCreativeCommonsConfirmed: {
    type: DataTypes.STRING,
  },
  dateModified: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW(),
  },
  booleanCreatedByUser: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  uuidUserId: {
    type: DataTypes.UUIDV4,
  },
}, {
  tableName: 'meals',
  updatedAt: false,
  createdAt: false,
})
