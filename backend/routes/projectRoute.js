const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/projectController');

// Fetch the entire projects section
router.get('/projects', ProjectsController.fetchProjects);

// Add a new project to the projects section
router.post('/projects', ProjectsController.addProject);

// Update a project in the projects section
router.put('/projects/:projectId', ProjectsController.updateProject);

module.exports = router;
