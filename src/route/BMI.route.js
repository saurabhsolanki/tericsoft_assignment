const express = require("express");
const BMI = require("../model/BMI.model");
const {isAuth}=require('../middleware/authentication')

const app = express.Router();

// this api is for get all the BMI data of a particular user with the help  of auth middleware
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


// this is for storing the BMI data of a partcular user with the help of middleware
app.post("/", isAuth,async (req, res) => {

    try {
        let items = await BMI.create({ ...req.body, user: req.userId });
        res.send(items);
      
    } catch (e) {
      res.status(500).send(e.message);
    }
  });



    // here we are deleting the bmi data
app.delete("/:id", async (req, res) => {
  try {
    const user = await BMI.findByIdAndDelete(req.params.id);
    return res.send({ message: "Single BMI Data Deleted", data: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
  
  module.exports = app;