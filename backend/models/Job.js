const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  salary: String,
  deadline: String,
  description: String,
}, {
  timestamps: true // includes createdAt
});

module.exports = mongoose.model('Job', jobSchema);
