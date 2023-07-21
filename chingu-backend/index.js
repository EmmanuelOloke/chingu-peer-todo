import express from 'express';
import dotenv from 'dotenv';
import { connect_to_database } from './config/database.js';
dotenv.config();

const app = express();


const PORT = process.env.PORT;

app.listen(PORT, () => {
  connect_to_database();
  console.log(`Server is running on port ${PORT}`);
});
