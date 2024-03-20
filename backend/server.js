const express = require('express');
const connectDB = require('./db/connectToMongoDB');
const headingRouter = require('./routes/headingRouter');
const skillRouter = require('./routes/skillRouter');
const testimonialRouter = require('./routes/testimonialRouter')
const projectsRoter = require('./routes/projectRoute');

const multer = require('multer');
const path = require('path'); // Require the 'path' module
require('dotenv').config()

const app = express();
const PORT = 3000;

const _dirname = path.resolve();






app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  next();
});



app.use(express.json());

// Define storage engine for multer to store uploaded images
const storage = multer.diskStorage({
  destination: './upload/images', // Destination folder for storing images
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    // Use original filename with current timestamp to ensure uniqueness
  }
});

const upload = multer({ storage: storage }); // Initialize multer with the defined storage engine
// Serve uploaded images
app.use('/images', express.static('upload/images'));

// Route for uploading images
app.post('/upload', upload.single('portfolio'), (req, res) => {
  if (!req.file) {
    // If no file was uploaded, return an error response
    return res.status(400).json({ success: 0, message: 'No file uploaded' });
  }

  // Construct the image URL using the correct fieldname (filename)
  const imageUrl = `http://localhost:${PORT}/images/${req.file.filename}`;

  // Return JSON response with success status and uploaded image URL
  res.json({ success: 1, Image_url: imageUrl });
});



// Header api 
app.use('/api', headingRouter);

// skill api
app.use('/api', skillRouter);

// Testimonial  API endpoints
app.use('/api', testimonialRouter);

// Project api endpoints
app.use('/api', projectsRoter);



app.use(express.static(path.join(_dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "frontend", "dist", "index.html"));
})



app.listen(PORT, () => {
  connectDB(); // Corrected typo in function call
  console.log(`listening on http://localhost:${PORT}`);
});
