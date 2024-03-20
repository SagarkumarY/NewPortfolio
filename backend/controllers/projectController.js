// projectsController.js
const ProjectsSection = require('../models/projectSchema');

module.exports = {
  // Fetch the entire projects section
  fetchProjects: async (req, res) => {
    try {
      const projectsSection = await ProjectsSection.findOne();
      res.json(projectsSection);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Add a new project to the projects section
  addProject: async (req, res) => {
    
    // console.log(req.body.projectCards)
    try {
      const { heading, introduction, projectCards } = req.body;

      // Validate if heading and introduction are provided
      if (!heading || !introduction) {
        return res.status(400).json({ error: 'Heading and introduction are required.' });
      }

      // Validate if projectCards is provided and is an array
      if (!Array.isArray(projectCards)) {
        return res.status(400).json({ error: 'Project cards must be provided as an array.' });
      }

      // Find the projects section or create a new one if it doesn't exist
      let projectsSection = await ProjectsSection.findOne();
      if (!projectsSection) {
        projectsSection = new ProjectsSection({ heading, introduction, projectCards });
      } else {
        projectsSection.projectCards.push(...projectCards);
      }

      // Save the updated projects section
      await projectsSection.save();

      res.json({ message: 'Project cards added successfully', projectsSection });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a project in the projects section
  updateProject: async (req, res) => {
    try {
      const { projectId, updatedProject } = req.body;

      // Find the projects section
      const projectsSection = await ProjectsSection.findOne();

      // Find the index of the project to be updated
      const index = projectsSection.projectCards.findIndex(
        (project) => project._id.toString() === projectId
      );

      // Update the project if found
      if (index !== -1) {
        projectsSection.projectCards[index] = updatedProject;
        await projectsSection.save();
      }

      res.json(projectsSection);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
