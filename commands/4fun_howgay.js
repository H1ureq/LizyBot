const Discord = require("discord.js");
const random = require('random');
module.exports.run = async (client, message, args) => {
    const member = message.mentions.users.first()
    const numberRandom = random.int(0, 100)
    if(!member) {
        const Embed = new Discord.MessageEmbed()
        .setTitle("Gej")
        .setDescription(`jesteś gejem w **${numberRandom}**%`)
        .setColor("#32f0e9")
        .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
        message.channel.send(Embed)
    }
    else if (member) {
        const embed1 = new Discord.MessageEmbed()
        .setTitle("Gej")
        .setDescription(`${member} jest gejem w **${numberRandom}**%`)
        .setColor("#32f0e9")
        .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
        message.channel.send(embed1)
    } 
}

module.exports.help = {
    name: "howgay"
}