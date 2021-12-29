const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let channel = new Discord.MessageEmbed()
    .setColor("#03dffc")
    .setTitle("channelinfo")
    .addField("Nazwa", `${message.channel.name}`)
    .addField("id kanału", `${message.channel.id}`)
    .addField("kanał stworzony", `${message.channel.createdAt.toLocaleString()}`)
    .addField("typ kanału", `${message.channel.type}`)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(channel)
} 

module.exports.help = {
    name: "channelinfo"
}