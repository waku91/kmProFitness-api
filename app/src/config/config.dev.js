require('dotenv').config();

const development = {
    port: process.env.PORT || 3000,
    database: process.env.DB_NAME || 'kmProFitness',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
};

module.exports = development;