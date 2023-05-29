'use strict';

module.exports = (sequelize, DataTypes) => {
    const Routine = sequelize.define('routine', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        file: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    });

    return Routine;
};
