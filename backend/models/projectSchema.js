const mongoose = require('mongoose');

// Schema for an individual project card
const ProjectCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
  },
});

// Schema for the entire "Projects" section
const ProjectsSectionSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    unique: true,
  },
  introduction: {
    type: String,
    required: true,
    unique: true,
  },
  projectCards: [ProjectCardSchema], // Array of project cards
});

const ProjectsSection = mongoose.model('ProjectsSection', ProjectsSectionSchema);

module.exports = ProjectsSection;
