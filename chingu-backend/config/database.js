import sqlite3 from "sqlite3"

export const connect_to_database = () => {

    try {
        //Path to the database
        const database_name = "chingu_db.db";
        const database_path = `${database_name}`;

        //Database connection
        const chingu_db = new sqlite3.Database(database_path, (error) => {
            if (error) {
                console.error(error.message)
            } else {
                console.log("Connected to DB.")
            }
        })
    } catch (error) {
        console.error(error.message)
    }
}