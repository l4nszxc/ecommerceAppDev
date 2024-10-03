const db = require('../config/db'); 
const Product = require('../models/Product'); // Product model handles DB operations
const path = require('path');
const fs = require('fs');

const adminController = {
    // Admin dashboard rendering with session validation
    admindash: (req, res) => {
        if (req.session.userId && req.session.role === 'admin') {
            res.render('admindashboard', { nickName: req.session.nickName });
        } else {
            res.redirect('/login'); // Redirect to login if user is not admin
        }
    },

    // Handle form submission to add new products
    addProduct: (req, res) => {
        console.log('Add product initiated'); // Log initiation of product addition

        const { name, description, price, stock, category } = req.body;
        const imageUrl = req.file ? req.file.filename : ''; // Handle file upload if any

        // Log data to be inserted
        console.log('Product details:', { name, description, price, stock, category, imageUrl });

        // Call the Product model to insert the product into the database
        Product.addProduct(
            { name, description, price, stock, category, image_url: imageUrl },
            (err, result) => {
                if (err) {
                    //console.error('Error inserting product:', err);
                    //return res.status(500).send('Failed to add product');
                }

                // Log successful insertion
                 //console.log('Product successfully inserted:', result);

                // Redirect to view products after successful addition
                res.redirect('/admin/adminviewproducts');
            }
        );
    }
};

module.exports = adminController;
