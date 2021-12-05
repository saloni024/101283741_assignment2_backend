const express = require('express');
const mongoose = require('mongoose');

const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://saloni:101283741@comp3123.acaf2.mongodb.net/101283741_assignment2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(employeeRouter);

app.listen(9090, () => { console.log('Server is running...') });