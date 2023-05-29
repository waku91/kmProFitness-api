const express = require('express');
const passport = require('passport');
const errorHandler = require('../middlewares/errorHandler');
const configureGoogleStrategy = require('../controllers/auth');

const authRoutes = express.Router();

configureGoogleStrategy(passport);

authRoutes.route('/google')
    .get(passport.authenticate('google', { scope: ['profile', 'email'] }));

authRoutes.route('/google/callback')
    .get(passport.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
        // Maneja la respuesta de autenticación exitosa
    });

authRoutes.use(errorHandler);

module.exports = authRoutes;
