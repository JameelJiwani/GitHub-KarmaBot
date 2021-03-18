// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Server extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       Server.belongsToMany(models.User, { through: models.Membership });
//     }
//   };
//   Server.init({
//     discordServerID: DataTypes.INTEGER,
//     serverName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Server',
//   });
//   return Server;
// };

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Server', {
    discordServerID: DataTypes.INTEGER,
		serverName: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: false
		}
	});
};