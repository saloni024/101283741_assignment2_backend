const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//fetch
app.get('/api/v1/employees', async (req, res) => {
  const employees = await employeeModel.find({});

  try {
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

//add
app.post('/api/v1/employees', async (req, res) => {
    
    const employee = new employeeModel(req.body);
    try {
      await employee.save();
      res.status(201).send("Successfully added!");
    } catch (err) {
      res.status(500).send(err);
      console.log(err);
    }
  });

  //find by id
  app.get('/api/v1/employees/:id', async (req, res) => {
    const employees = await employeeModel.findById(req.params.id);
  
    try {
      res.send(employees);
    } catch (err) {
      res.status(500).send(err);
    }
  });

//Update Record
app.put('/api/v1/employees/:id', async (req, res) => {
    try {
      await employeeModel.findByIdAndUpdate(req.params.id, req.body)
      await employeeModel.save()
      res.status(200).send("Updated successfully!")
    } catch (err) {
      res.status(500).send(err)
    }
  })

//Delete Record
app.delete('/api/v1/employees/:id', async (req, res) => {
    try {
      const employee = await employeeModel.findByIdAndDelete(req.params.id)
  
      if (!employee) res.status(404).send("No item found")
      res.status(200).send("Deleted successfully!")
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app