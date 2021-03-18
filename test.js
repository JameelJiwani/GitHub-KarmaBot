
const { Sequelize } = require('sequelize');
const { models } = require('./models/sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    }
});


sequelize.authenticate().then(() => {
    console.log('Connection to postgres database has been established successfully.');
}).then(() => {
    return models.User.findOrCreate({
        where: { discordUID: 123 },
        defaults: {
            userName: "joe",
            discordUID: 123
        }
    });
}).then((user, createdUser) => {
    return models.Server.findOrCreate({
        where: { discordServerID: 1 },
        defaults: {
            discordServerID: 1,
            serverName: "server"
        }
    }).then((server, createdServer) => {
        return [server, user];
    });
}).then(([server, user]) => {
    return models.Membership.findOrCreate({
        where: { UserId: user[0].dataValues.id },
        defaults: {
            karma: 0,
            ServerId: server[0].dataValues.id,
            UserId: user[0].dataValues.id
        }
    });
}).then((membership, createdMembership) => {
    console.log(membership);
    console.log(createdMembership);
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});

