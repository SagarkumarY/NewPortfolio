const mongoose = require('mongoose');

// Define schema for skills
const skillSchema = new mongoose.Schema({
  category: { type: String, required: true }, // Category of the skill (e.g., "Frontend", "Backend", "Others")
  name: { type: String, required: true }, // Name of the skill (e.g., "HTML", "Node.js", "Git & Github")
  proficiency: { type: String, required: true }, // Proficiency level of the skill (e.g., "Experienced", "Intermediate")
});

// Create model from schema
const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;

