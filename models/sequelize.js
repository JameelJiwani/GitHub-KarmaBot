const Sequelize = require('sequelize')
require('dotenv').config();

// const UserModel = require('./user')
// const ServerModel = require('./server')
// const MembershipModel = require('./membership');
// const user = require('./user');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

// const models = {
//     User: UserModel.init(sequelize, Sequelize),
//     Server: ServerModel.init(sequelize, Sequelize),
//     Membership: MembershipModel.init(sequelize, Sequelize)
// };

// Object.values(models)
//   .filter(model => typeof model.associate === "function")
//   .forEach(model => model.associate(models));

//   const db = {
//     ...models,
//     sequelize
//   };
  
//   module.exports = db;

const models = [
    require('./user'),
    require('./server'),
    require('./membership')
];


for (const model of models) {
	model(sequelize);
}

const { Server, User, Membership } = sequelize.models;

User.belongsToMany(Server, { through: Membership });
Server.belongsToMany(User, { through: Membership });

module.exports = sequelize;