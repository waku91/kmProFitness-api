'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sizes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      bmi: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      waist_circumference: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      hip_circumference: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
      body_fat_percentage: {
        type: Sequelize.FLOAT,
        defaultValue: null,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sizes');
  }
};
