const mongoose = require("./index");

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  imageUrl: String,
  salary: Number, 
  category: {
    type: String,
    enum: ["IT", "Finance", "Bio-technology"],
    default: "IT",
  },
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;