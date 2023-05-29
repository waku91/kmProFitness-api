'use strict';

module.exports = (sequelize, DataTypes) => {
    const Nutrition = sequelize.define('nutrition', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        file: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
    });

    return Nutrition;
};
