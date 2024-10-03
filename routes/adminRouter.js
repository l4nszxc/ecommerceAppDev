const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');
const multer = require('multer');
const path = require('path');

// Set up storage for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the directory for file uploads
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with extension
    }
});

const upload = multer({ storage: storage });

// Admin dashboard route
router.get('/admindashboard', adminController.admindash);

// Render the admin view products page
// Render the admin view products page
router.get('/adminviewproducts', (req, res) => {
  // Add a log to verify the route is being hit
  console.log('Rendering adminviewproducts page');
  
  // Ensure you are passing any necessary data to the view
  res.render('adminviewproducts');
});


// Render the add product page for a specific category
router.get('/adminaddproducts/:category', (req, res) => {
    const { category } = req.params;
    res.render('adminaddproducts', { category });
});

// Handle product addition with image upload
router.post('/adminaddproducts', upload.single('imageUrl'), adminController.addProduct);

module.exports = router;
