const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'dev';
const config = require(`../config/config.${env}.js`);
require('dotenv').config();

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
