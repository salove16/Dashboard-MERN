const express = require("express");

const connect = require("./config/db");
const userController=require("./controllers/user.Controller")
const employeeController=require("./controllers/employee.controller")
const {
    register,
    login,
    generateToken,
  } = require("./controllers/auth.controller");

const cors = require("cors");

const app = express();

app.use(express.json());



app.use(cors());

app.use("/users", userController);

app.post("/signup", register);

app.post("/login", login);

app.use("/employee", employeeController);



app.listen(8000, async () => {
  try {
    await connect();
    console.log("port is listening to 8000");
  } catch (err) {
    console.log(err);
  }
});
