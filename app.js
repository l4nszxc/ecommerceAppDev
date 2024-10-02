const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const productRouter = require('./routes/productRouter');  // Add this line for product routes
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Session configuration
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,    
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Middleware for redirecting unauthorized access
app.use((req, res, next) => {
    const adminPages = ['/admin']; // Add more if needed
    if (!req.session.user && adminPages.includes(req.originalUrl)) {
        return res.redirect(req.headers.referer || '/login');
    }
    next();
});

// Routes
app.use('/', userRouter);
app.use('/admin', adminRouter);
app.use('/products', productRouter); // Add this to handle product category routing

app.listen(3003, () => {
    console.log('Server running at http://localhost:3003');
});
