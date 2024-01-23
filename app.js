const express = require("express");
const pool = require("./db/db");
const userController = require("./controllers/users.controller");
const app = express();

// Parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

//Parse JSON data
app.use(express.json());

app.use((req, res, next) => {
  req.mysql = pool;
  next();
});

app.use("/user", userController);

// app.get("/", async (req, res) => {
//   let sql = `select * from users;`;
//   try {
//     let [result] = await pool.promise().query(sql);
//     res.json({
//       message: "success",
//       result: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "ERR in mysql query",
//       error,
//     });
//   }
// });

// app.post("/getuser", async (req, res) => {
//   let { user, password } = req.body;
//   let sql = `select * from users where userName = "${user}" AND userPassword = "${password}";`;
//   try {
//     // array destructing is happening here
//     let [result] = await pool.promise().query(sql);
//     if (result.length > 0) {
//       res.json({
//         message: "success",
//         result,
//       });
//     } else {
//       res.json({
//         message: "no user found",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "err",
//       error: err,
//     });
//   }
// });

module.exports = app;
