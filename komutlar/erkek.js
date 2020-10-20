const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {

    let embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Uyarı !")
    .setDescription("Bu Komutu Kullanmaya Yetkin Yok")
      if(!message.member.roles.cache.has("762306051336437800")) return message.channel.send(embed1);

   let member = message.guild.member(message.mentions.users.first()) || client.users.cache.get(args.join(' '))  
 

let isim  =  args[1]
let yaş =  args[2]

if(!member) return message.channel.send(`Lütfen geçerli bir kullanıcı veya ID belirt.`)

  member.roles.add("762306051999531068")
  member.roles.remove("762306275916644372")

message.react(':white_check_mark:')
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: "erkek",
  description: "v12 erkek kayıt."
};