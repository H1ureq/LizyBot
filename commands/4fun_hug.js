const request = require("request");
const Discord = require("discord.js");
exports.run = (client, message, args, level) => {

    const debil = message.mentions.users.first()

    if(debil){
        try {
            request(`https://some-random-api.ml/animu/hug`, function( 
              error,
              response,
              body
            ) {
              let json = JSON.parse(body);
              const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`Przytulas!`)
                .setDescription(`**${message.author.username}** Przytulił **${debil.username}**`)
                .setImage(json.link || "BRAK")
                .setTimestamp();
              message.channel.send(embed);
              return;
            });
          } catch (err) {
            const txtemb = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle("Error: " + err);
            return message.channel.send(txtemb);
          }
    } else if(!debil){
        try {
            request(`https://some-random-api.ml/animu/hug`, function( 
              error,
              response,
              body
            ) {
              let json = JSON.parse(body);
              const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Przytulas!")
                .setDescription(`**${message.author.username}** Przytulił samego siebie!`) 
                .setImage(json.link || "BRAK")
                .setTimestamp();
              message.channel.send(embed);
              return;
            });
          } catch (err) {
            const txtemb = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle("Error: " + err);
            return message.channel.send(txtemb);
          }
    }
};

module.exports.help = {
    name: "hug"
}