// const SkillsSection= require("../models/skillSchema");

// controllers/skillController.js

const Skill = require('../models/skillSchema');

// Controller to get all skills
exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to create a new skill
exports.createSkill = async (req, res) => {
  const skill = new Skill({
    category: req.body.category,
    name: req.body.name,
    proficiency: req.body.proficiency,
  });
 

  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to update an existing skill
exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (skill == null) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    if (req.body.category != null) {
      skill.category = req.body.category;
    }

    if (req.body.name != null) {
      skill.name = req.body.name;
    }

    if (req.body.proficiency != null) {
      skill.proficiency = req.body.proficiency;
    }



    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to delete an existing skill
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (skill == null) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    await skill.remove();
    res.json({ message: 'Skill deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};














// module.exports = {
//   getSkillsSection: async (req, res) => {
//     try {
//       const skillsSection = await SkillsSection.findOne();
//       res.json(skillsSection);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },

//   updateSkillsSection: async (req, res) => {
//     try {
//       const { heading, title, skills } = req.body;

//       // Assuming you have only one document in the collection
//       const existingSkillsSection = await SkillsSection.findOne();

//       if (!existingSkillsSection) {
//         // If no skills section exists, create a new one
//         const newSkillsSection = new SkillsSection({
//           heading,
//           title,
//           skills,
//         });
//         await newSkillsSection.save();
//         res.json(newSkillsSection);
//       } else {
//         // Update existing skills section
//         existingSkillsSection.heading = heading;
//         existingSkillsSection.title = title;
//         existingSkillsSection.skills = skills;
//         await existingSkillsSection.save();
//         res.json(existingSkillsSection);
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },

//   addSkill: async (req, res) => {
//     try {
//       const { title, image, link } = req.body;

//       // Assuming you have only one document in the collection
//       const existingSkillsSection = await SkillsSection.findOne();

//       if (existingSkillsSection) {
//         // Add a new skill to the existing skills section
//         existingSkillsSection.skills.push({ title, image, link });
//         await existingSkillsSection.save();
//         res.json(existingSkillsSection);
//       } else {
//         // If no skills section exists, create a new one with the added skill
//         const newSkillsSection = new SkillsSection({
//           skills: [{ title, image, link }],
//         });
//         await newSkillsSection.save();
//         res.json(newSkillsSection);
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },
// };
