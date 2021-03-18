// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       User.belongsToMany(models.Server, { through: models.Membership });
//     }
//   };
//   User.init({
//     discordUID: DataTypes.INTEGER,
//     userName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

// module.exports = sequelize.define('user', {
//   ddiscordUID: DataTypes.INTEGER,
//   userName: DataTypes.STRING
// }, {});


const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('user', {
    ddiscordUID: DataTypes.INTEGER,
		username: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: false
		}
	});
};