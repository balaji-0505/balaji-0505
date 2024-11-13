const mongoose = require('mongoose');

// Define the faculty schema
const facultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  hireDate: { type: Date, default: Date.now }
});

// Create the Faculty model based on the schema
const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
