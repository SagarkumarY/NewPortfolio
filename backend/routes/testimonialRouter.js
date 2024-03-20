const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');

// Route to add a new testimonial
router.post('/testimonials', testimonialController.addTestimonial);

// Route to fetch all testimonials
router.get('/testimonials', testimonialController.fetchTestimonials);

// Route to delete a testimonial by ID
router.delete('/testimonials/:id', testimonialController.deleteTestimonial);

// Route to update a testimonial by ID
router.put('/testimonials/:id', testimonialController.updateTestimonial);

module.exports = router;
