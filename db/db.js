const mysql = require("mysql2");

let connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "userLogin",
});

connection.getConnection((err) => {
  if (!err) {
    console.log("db connected");
  } else {
    console.log("db NOT connected");
  }
});

module.exports = connection;
