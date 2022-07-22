const express = require("express");
const Employee = require("../models/employee.model")
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const employee = await Employee.find().lean().exec();
    return res.status(201).send(employee);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    return res.status(201).send(employee);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
    try {
      const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(employee);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  });
  router.delete("/:id", async (req, res) => {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.id, req.body, {
        new: true,
      });
      res.send(employee);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  });
  
  module.exports = router;