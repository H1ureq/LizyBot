const Discord = require("discord.js")
module.exports.run = async(client, message, args) => {
    let info = new Discord.MessageEmbed()
    .setColor("#276696")
    .setTitle("Serverinfo")
    .addField("Właściciel", `${message.guild.owner}`)
    .addField("ID serwera", `${message.guild.id}`)
    .addField("Nazwa serwera", `${message.guild.name}`)
    .addField("Kanały:", `Tekstowe \`${message.guild.channels.cache.filter(m => m.type === 'text').size}\` \n Głosowe \`${message.guild.channels.cache.filter(m => m.type === 'voice').size}\` \n Kategorie \`${message.guild.channels.cache.filter(m => m.type === 'category').size}\``)
    .addField("Największa rola", `${message.guild.roles.highest}`)
    .addField("Serwer stworzony", `${message.guild.createdAt.toLocaleString()}`)
    .addField("Dołączyłeś na serwer", `${message.guild.joinedAt.toLocaleString()}`)
    .addField("Ilość ulepszeń:", `${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'Brak'}`)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(info)
}

module.exports.help = {
    name: "serverinfo"
}
