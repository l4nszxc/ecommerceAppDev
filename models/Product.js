const db = require('../config/db');

const Product = {
    // Function to insert a new product into the database
    addProduct: ({ name, description, price, stock, category, image_url }, callback) => {
        const query = 'INSERT INTO products (name, description, price, stock, category, image_url) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [name, description, price, stock, category, image_url];

        console.log('Executing query:', query); // Log the query

        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Error inserting product into the database:', err);
                return callback(err);
            }

            console.log('Query result:', result); // Log successful query result
            callback(null, result);
        });
    }
};

module.exports = Product;
