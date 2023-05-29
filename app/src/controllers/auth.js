const GoogleStrategy = require('passport-google-oauth20').Strategy;
const google = require('../config/google.config'); // Importa tus credenciales de Google

module.exports = function configureGoogleStrategy(passport) {
    passport.use(new GoogleStrategy({
        clientID: google.clientID,
        clientSecret: google.clientSecret,
        callbackURL: google.callbackURL
    }, function (accessToken, refreshToken, profile, done) {
        // Lógica para autenticar al usuario
    }));
}
