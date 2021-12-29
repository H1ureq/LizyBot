const Discord = require("discord.js");
const random = require("random");
module.exports.run = async (client, message, args) => {
    const member = message.mentions.users.first()
    const numberRandom = random.int(0, 100)
    if(!member) {
        const Embed = new Discord.MessageEmbed()
        .setTitle("Kijaszek")
        .setDescription(`długość kija ${message.author} wynosi: ${numberRandom}cm`)
        .setColor("#32f0e9")
        .setThumbnail("https://cdn.discordapp.com/emojis/856294108276850708.png?v=1")
        .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
        message.channel.send(Embed)
    }
    else if (member) {
        const embed1 = new Discord.MessageEmbed()
        .setTitle("Kijaszek")
        .setDescription(`długość kijka ${member} wynosi ${numberRandom}cm`)
        .setColor("#32f0e9")
        .setThumbnail("https://cdn.discordapp.com/emojis/856294108276850708.png?v=1")
        .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
        message.channel.send(embed1)
    }
}


module.exports.help = {
    name: "kijek"
}