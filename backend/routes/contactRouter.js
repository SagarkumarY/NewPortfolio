const express = require('express');
const router = express.Router();
const contactMessageController = require('../controllers/contactController');

// Route to add a new contact message
router.post('/contact-messages', contactMessageController.addContactMessage);

module.exports = router;