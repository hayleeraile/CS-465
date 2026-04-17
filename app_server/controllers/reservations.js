const reservations = (req, res) => {
    res.render('reservations', { title: 'Reservations'});
};

module.exports = {
    reservations
};