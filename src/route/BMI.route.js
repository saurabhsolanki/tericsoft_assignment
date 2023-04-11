const express = require("express");
const BMI = require("../model/BMI.model");
const {isAuth}=require('../middleware/authentication')

const app = express.Router();
// app.use(isAuth)

app.get("/", isAuth,async (req, res) => {
  try {
    let items = await BMI.find({ user: req.userId }).populate([
      "user",
      "bmi",
    ]);
    res.send(items);
  } catch (error) {
    res.status(500).send(e.message);
  }
});


app.post("/", isAuth,async (req, res) => {
    const {height,weight}=req.body

    try {
        let items = await BMI.create({ ...req.body, user: req.userId });
        res.send(items);
      
    } catch (e) {
      res.status(500).send(e.message);
    }
  });



    // delete the user
app.delete("/:id", async (req, res) => {
  try {
    const user = await BMI.findByIdAndDelete(req.params.id);
    return res.send({ message: "Single BMI Data Deleted", data: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
  
  module.exports = app;