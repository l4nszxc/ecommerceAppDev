const User = require('../models/User');
const bcrypt = require('bcryptjs');

const adminController = {
    admindash: (req, res) => {
        if (req.session.userId && req.session.role === 'admin') {
            res.render('admindashboard', { nickName: req.session.nickName });
        } else {
            res.redirect('/login'); // Redirect to login if not an admin
        }
    }
};

module.exports = adminController;