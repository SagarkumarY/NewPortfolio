// const express = require('express');
// const router = express.Router();
// const SkillController = require('../controllers/skillController');

// // Define routes
// router.get('/skills-section', SkillController.getSkillsSection);
// router.post('/skills-section', SkillController.updateSkillsSection);
// router.post('/add-skill', SkillController.addSkill);

// module.exports = router;




const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// Routes for managing skills

// Route to get all skills
router.get('/skills', skillController.getAllSkills);

// Route to create a new skill
router.post('/skills', skillController.createSkill);

// Route to update an existing skill
router.put('/skills/:id', skillController.updateSkill);

// Route to delete an existing skill
router.delete('/skills/:id', skillController.deleteSkill);

module.exports = router;

