const mongoose = require('mongoose');

const headingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  bannerImage: {
    type: String, // Assuming you store the image URL
    required: true,
  },
  // You can add more fields as needed
});

const Heading = mongoose.model('Heading', headingSchema);

module.exports = Heading;
