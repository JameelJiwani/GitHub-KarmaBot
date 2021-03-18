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
            rejectUnauthorized: false
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
    if(msg?.embeds[0]?.title.includes("master")) {
        const [user, createdUser] = await models.User.findOrCreate({
            where: { userName: msg?.embeds[0]?.author.name },
            defaults: {
                userName: msg?.embeds[0]?.author.name,
                // This is a bug now lol (GitHub bot UID, not actual user)
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
            where: { UserId: user.dataValues.id },
            defaults: {
                karma: 0,
                ServerId: server.dataValues.id,
                UserId: user.dataValues.id
            }
        });
        console.log(user.dataValues);
        console.log(server.dataValues);
        console.log(membership.dataValues);
        await models.Membership.update({ karma: membership.dataValues.karma - 1 }, {
            where: {
                id: membership.dataValues.id
            }
        });
        msg.reply("You idiot! You have to make a PR!!\n New Karma: " + (membership.dataValues.karma - 1));
    }
})

client.login(process.env.DISCORD_TOKEN);