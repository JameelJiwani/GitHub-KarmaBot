'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Memberships',
      'userId',
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
    await queryInterface.addColumn(
      'Memberships',
      'serverId',
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Servers', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Memberships', // name of Source model
      'userId' // key we want to remove
    );
    await queryInterface.removeColumn(
      'Memberships', // name of Source model
      'serverId' // key we want to remove
    );
  }
};
