const superagent = require("superagent");
const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let { body } = await superagent.get(
        `https://api.thecatapi.com/v1/images/search?size=full`
      );
  
      if (!body) return message.reply("Wystąpił błąd spróbuj ponownie");

      var jp = require('jsonpath');
      var wartosc = body[0]["url"];
  
      const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(`Kotek!`)
        .setImage(wartosc)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL());
  
      message.channel.send(embed);
}
module.exports.help = {
    name: "kot"
    }