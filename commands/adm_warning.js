const db = require("quick.db")
const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    const user = message.mentions.members.first() || message.author

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    if(warnings === null) warnings = 0;

    let embed1 = new Discord.MessageEmbed()
    .setColor("#18f03c")
    .setTitle("Ostrzeżenia.")
    .addField("Osoba:", `${user}`, false)
    .addField("Ilość ostrzeżeń:", `${warnings}`, false)
    .setTimestamp() // czas 
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(embed1)
}

module.exports.help = {
    name: "warning"
}