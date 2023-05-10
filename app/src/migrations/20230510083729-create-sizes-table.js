'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weight: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      height: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      bmi: {
        type: Sequelize.FLOAT,
        defaultValue: null
      },
      waist_circumference: {
        type: Sequelize.FLOAT,
        defaultValue: null
      },
      hip_circumference: {
        type: Sequelize.FLOAT,
        defaultValue: null
      },
      body_fat_percentage: {
        type: Sequelize.FLOAT,
        defaultValue: null
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sizes');
  }
};
