const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Server', {
    discordServerID: DataTypes.BIGINT,
		serverName: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: false
		}
	});
};