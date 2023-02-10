'use strict';

import { Sequelize } from 'sequelize';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DB_DATABASE, DB_PASSWORD, DB_USER, DB_HOST } = process.env;

export const sequelize = new Sequelize(DB_DATABASE || '', DB_USER || '', DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  dialectModule: pg,
});

// TEST CONNECTION 

// const f = async() => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// f();

