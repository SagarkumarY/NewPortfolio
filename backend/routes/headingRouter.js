// const express = require('express');
// const router = express.Router();
// const HeadingController = require('../models/headingSchema');




// // Define routes
// // Get the existing heading
// router.get('/header', HeadingController.getHeading);

// // Update the existing heading or create a new one
// router.post('/header', HeadingController.updateHeading);

// // Add a new heading
// router.post('/add-header', HeadingController.addHeading);

// module.exports = router;


// testRouter.js


const express = require('express');
const router = express.Router();
const headingController = require('../controllers/headingController');

// Define route for testing
router.get('/fetchheading', headingController.getHeading);
router.post('/information', headingController.addHeading);
router.post('/updateheading', headingController.updateHeading);

module.exports = router;
