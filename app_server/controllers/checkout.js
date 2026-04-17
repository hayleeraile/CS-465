const checkout = (req, res) => {
    res.render('checkout', { title: 'Checkout'});
};

module.exports = {
    checkout
};