const Discord = require('discord.js');
const { Sequelize } = require('sequelize');
const { models } = require('./models/sequelize');
var config = require('./config/config');

const client = new Discord.Client();
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

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

sequelize.authenticate().then(() => {
    console.log('Connection to postgres database has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});

client.on('message', async msg => {
    console.log(msg?.embeds[0]?.author);
    if(msg?.embeds[0]?.title.includes("master")) {
        // const [user, createdUser] = await User.findOrCreate({
        const [user, createdUser] = await models.User.findOrCreate({
            where: { discordUID: msg?.author?.id },
            defaults: {
                userName: msg?.author?.username,
                discordUID: msg?.author?.id
            }
        });

        const [server, createdServer] = await models.Server.findOrCreate({
            where: { discordServerID: msg?.channel?.guild?.id },
            defaults: {
                discordServerID: msg?.channel?.guild?.id,
                serverName: msg?.channel?.guild?.name
            }
        });

        const [membership, createdMembership] = await models.Membership.findOrCreate({
            where: { UserId: user[0].dataValues.id },
            defaults: {
                karma: 0,
                ServerId: server[0].dataValues.id,
                UserId: user[0].dataValues.id
            }
        });

        await models.Membership.update({ karma: membership.karma - 1 }, {
            where: {
                id: membership.id
            }
        });
        msg.reply("You idiot! You have to make a PR!!\n New Karma: " + membership.karma - 1);
    }
})

client.login(process.env.DISCORD_TOKEN);