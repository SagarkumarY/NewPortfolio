const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  avatar: String,
  name: String,
  review: String,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
