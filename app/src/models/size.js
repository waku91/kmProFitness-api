'use strict';
module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('Size', {
    weight: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    height: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    bmi: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    waist_circumference: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    hip_circumference: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    body_fat_percentage: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
  }, {});
  Size.associate = function (models) {
    // associations can be defined here
  };
  return Size;
};
