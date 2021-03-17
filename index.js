const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log(msg);
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjkwNDEzMjM3NjYwOTQyMzU3.XnRDbw.Hq6FydfCvn9F_OfGw8xD4ma6BUg');