const ph = {
    home: (req, res) => {
        res.render('homepage');
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
};


module.exports = ph;
