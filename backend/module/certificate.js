const mongoose = require("mongoose");

const certificatemodule = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  issuer: {
    type: String,
    required: true
  },
  issueDate: {
    type: Date
  },
  image: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("certificatemodule", certificatemodule);