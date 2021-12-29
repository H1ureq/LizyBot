const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.delete();
    let ping = Math.round(client.ws.ping);

    let embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('🏓 Pong')
    .setDescription(`Ping bota wynosi: **${ping}**`)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
     message.channel.send(embed);
  }
   
 module.exports.help = {
       name: "ping"
   }