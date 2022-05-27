import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';
import databaseOptions from '../config/database.js';
dotenv.config();
const pool = mysql2.createPool(databaseOptions);

export default pool;
