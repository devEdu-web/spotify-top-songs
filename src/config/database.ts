import dotenv from 'dotenv'
dotenv.config({
  path: '../../.env'
})
import {dbOptions} from '../interfaces/index'

const databaseOptions: dbOptions = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dateStrings: true
}

export default databaseOptions