const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');


router.get('/', (req, res) => {
    res.render('admindashboard'); // Render the admin dashboard view
});

router.get('/adminviewproducts', (req, res) => {
    res.render('adminviewproducts'); // Render the admin view products page
});
router.get('/adminaddproducts/:category', (req, res) => {
    const { category } = req.params; // Get the category from the route parameters
    res.render('adminaddproducts', { category }); // Pass the category to the view
});

// Admin dashboard route
router.get('/admindashboard', adminController.admindash);

module.exports = router;
