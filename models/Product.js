const db = require('../config/db');

// Define a Product object with methods for database operations
const Product = {};

// Method to get products by category
Product.getProductsByCategory = (category, callback) => {
    const query = 'SELECT * FROM products WHERE category = ?';
    
    db.query(query, [category], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Export the Product object
module.exports = Product;
