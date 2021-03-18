'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'discordUID', {
      type: Sequelize.DataTypes.BIGINT,
      allowNull: false
    });
    await queryInterface.changeColumn('Servers', 'discordServerID', {
      type: Sequelize.DataTypes.BIGINT,
      allowNull: false
    });
    await queryInterface.changeColumn('Memberships', 'userId', {
      type: Sequelize.DataTypes.BIGINT,
      allowNull: false
    });
    await queryInterface.changeColumn('Memberships', 'serverId', {
      type: Sequelize.DataTypes.BIGINT,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'discordUID', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    });
    await queryInterface.changeColumn('Servers', 'discordServerID', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    });
    await queryInterface.changeColumn('Memberships', 'userId', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    });
    await queryInterface.changeColumn('Memberships', 'serverId', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    });
  }
};
