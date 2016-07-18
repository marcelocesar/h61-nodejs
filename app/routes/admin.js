"use strict";

function admin(app) {
    app.get('/admin', function (req, res) {
        res.render('admin');
    });
}

module.exports = admin;