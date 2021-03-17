const Discord = require('discord.js');
const { Sequelize } = require('sequelize');
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

client.on('message', msg => {
    console.log(msg);
    if(msg?.embeds[0]?.title.includes("master")) {
        msg.reply("You idiot! You have to make a PR!!")
    }
})

client.login(process.env.DISCORD_TOKEN);