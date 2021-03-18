const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Membership', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    karma: DataTypes.INTEGER
	});
};