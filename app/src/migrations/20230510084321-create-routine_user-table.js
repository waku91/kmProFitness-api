'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('routine_user', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      users_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      routine_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'routine',
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    await queryInterface.addConstraint('routine_user', {
      fields: ['users_id'],
      type: 'foreign key',
      name: 'fk_routine_user_users',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('routine_user', {
      fields: ['routine_id'],
      type: 'foreign key',
      name: 'fk_routine_user_routine1',
      references: {
        table: 'routine',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('routine_user', 'fk_routine_user_routine1');
    await queryInterface.removeConstraint('routine_user', 'fk_routine_user_users');
    await queryInterface.dropTable('routine_user');
  }
};
