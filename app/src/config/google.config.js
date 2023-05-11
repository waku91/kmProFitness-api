require('dotenv').config();

const google = {
    clientID: 'TU_CLIENT_ID',
    clientSecret: 'TU_CLIENT_SECRET',
    callbackURL: 'http://localhost:3000/api/auth/google'
}
module.exports = google