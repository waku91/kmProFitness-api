'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createDatabase('ksProFitness');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropDatabase('ksProFitness');
  },
};
