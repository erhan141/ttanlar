const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 
  const liester = new Discord.RichEmbed()
  .setTitle('eren kalp duygu')
  .setImage("https://cdn.discordapp.com/avatars/338776220437315584/a_50539e31999ffc9b97096a1600edc0c2.gif")
  message.channel.send(liester)
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'atatürk',
  description: 'Ping komutudur.',
  usage: 'atatürk'
}

