const mongoose = require('mongoose');
const Testimonial = require('../models/testimonialSchema');

// Add a new testimonial
exports.addTestimonial = async (req, res) => {
  try {
    const { name, review } = req.body;

    // Generate a random avatar URL
    const avatarURL = generateRandomAvatarURL();

    const testimonial = new Testimonial({ name, review, avatar: avatarURL });
    await testimonial.save();
    res.status(201).send(testimonial);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Function to generate a random avatar URL
function generateRandomAvatarURL() {
  const avatars = [
    "https://avatar.iran.liara.run/public/boy",
    "https://avatar.iran.liara.run/public/girl",
    // Add more avatar URLs as needed
  ];

  // Select a random avatar URL from the array
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randomIndex];
}



// Fetch all testimonials
exports.fetchTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.send(testimonials);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete a testimonial by ID
exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      res.status(404).send();
    }
    res.send(testimonial);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a testimonial by ID
exports.updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!testimonial) {
      res.status(404).send();
    }
    res.send(testimonial);
  } catch (error) {
    res.status(400).send(error);
  }
};
