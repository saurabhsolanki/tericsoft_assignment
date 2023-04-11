const express = require("express");
const dbConnect = require("./config/db");
const cors = require("cors");
const userRoute=require('./route/User.route')
const bmiRoute=require('./route/BMI.route')
require("dotenv").config()
const PORT = process.env.PORT ;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("hello"));
app.use("/user",userRoute)
app.use('/bmi',bmiRoute)

app.listen(PORT, async () => {
    await dbConnect()
  console.log("server started at port 8080");
});
