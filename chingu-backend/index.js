import express from 'express';
import dotenv from 'dotenv';
import { connect_to_database } from './config/database.js';
import morgan from 'morgan';
import router from "./routes/todoRoutes.js";
dotenv.config();

const app = express();
//Setup morgan to log API status
app.use(morgan('dev'))


//Setup middleware for the /todo route
app.use("/todo", router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connect_to_database();
  console.log(`Server is running on port ${PORT}`);
});
