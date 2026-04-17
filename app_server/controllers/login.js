const login = (req, res) => {
    res.render('login', { title: 'Login'});
};

const doLogin = (req, res) => {
    const { email, password } = req.body;

    if (email === 'haylee@example.com' && password === 'SomeValue!') {
        req.session.loggedIn = true;
        req.session.user = { email };
        return res.redirect('/reservations');
    }

    res.render('login', {
        title: 'Login',
        error: 'Invalid email or password'
    });
};

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};

module.exports = {
    login,
    doLogin,
    logout
};