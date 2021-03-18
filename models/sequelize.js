const Sequelize = require('sequelize')
require('dotenv').config();

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