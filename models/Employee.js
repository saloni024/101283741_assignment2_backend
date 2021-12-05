const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Enter Id!'],
    trim: true,
  },
  firstname: {
    type: String,
    required: [true, 'Enter Firstname!'],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, 'Enter Lastname!'],
    trim: true,
  },
  emailId: {
    type: String,
    required: [true, 'Enter Email Id!'],
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address!']
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;