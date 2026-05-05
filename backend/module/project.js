const mongoose = require("mongoose");


const project = new mongoose.Schema({
    title: String,
    description: String,
    tech: String,
    githubLink: String,
    liveLink: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
  }
})

const projectmodule = mongoose.model("projectmodule", project);

module.exports =  projectmodule;