//Import fs to read the sql files
import fs from "fs";
import { connect_to_database } from "../config/database.js";

const dbConnection = connect_to_database();

//Controller endpoint to create a todo
export const createTodo = (req, res) => {
    const { id, body, date, isDone } = req.body;
    const createTodoQuery = fs.readFileSync("./sql/createTodoQuery.sql").toString();
    dbConnection.all(createTodoQuery, [id, body, date, isDone], (error) => {
        if (error) {
            console.log(error);
        }
        res.send({
            status: "Successful"
        })
    })
}

//Controller endpoint to get all todos
export const getAllTodos = () => { }

//Controller endpoint to get a todo by id
export const getTodoById = (id) => {

}

//Controller endpoint to delete a todo by id
export const deleteTodoById = (id) => {

}