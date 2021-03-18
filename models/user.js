const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('User', {
    discordUID: {
			allowNull: false,
			type: DataTypes.BIGINT,
	  },
		userName: {
			allowNull: false,
			type: DataTypes.STRING,
	  }
  });
};