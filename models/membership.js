// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Membership extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Membership.init({
//     karma: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Membership',
//   });
//   return Membership;
// };

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Membership', {
    karma: DataTypes.INTEGER
	});
};