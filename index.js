const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg?.embeds[0]?.title.includes("master")) {
        msg.reply("You idiot! You have to make a PR!!")
    }
})

