const mysql = require('mysql2');

let database = null;

module.exports = {
    mysql: () => {
        if (!database) {
            database = mysql.createConnection(
                {
                    host: 'localhost',
                    database: process.env.DB_NAME,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                },
                console.log(`Connection to employee_db database established.`)
            );
        }

        return database;
    }
};