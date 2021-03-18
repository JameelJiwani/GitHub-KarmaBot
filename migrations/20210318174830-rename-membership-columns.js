'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Memberships', 'userId');
    await queryInterface.removeColumn('Memberships', 'serverId');
    await queryInterface.addColumn(
      'Memberships',
      'UserId',
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
      'ServerId',
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
    await queryInterface.removeColumn('Memberships', 'UserId');
    await queryInterface.removeColumn('Memberships', 'ServerId');
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
  }
};
