const db = require("quick.db")
const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    const user = message.mentions.members.first()

    let embed7 = new Discord.MessageEmbed()
    .setTitle("Błąd")
    .setColor("RED")
    .setDescription("Nie masz permisji")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    if (!message.member.hasPermission('MANAGE_MEMBERS')) return message.channel.send(embed7)

    let embed2 = new Discord.MessageEmbed()
  .setTitle('Błąd!')
  .setDescription('Oznacz użytkownika któremu chcesz zresetować warny')
  .setColor("RED")
  .setTimestamp()
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    if(!user) return message.channel.send(embed2)

    let embed3 = new Discord.MessageEmbed()
  .setTitle('Błąd!')
  .setDescription('Bot nie może mieć ostrzeżeń')
  .setColor("RED")
  .setTimestamp()
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
  if(message.mentions.users.first().bot) return message.channel.send(embed3)

  let embed4 = new Discord.MessageEmbed()
  .setTitle('Błąd!')
  .setDescription('Nie możesz zresetować swoich ostrzeżeń')
  .setColor("RED")
  .setTimestamp()
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
  if(message.author.id === user.id) return message.channel.send(embed4)

  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)


  let embed5 = new Discord.MessageEmbed()
  .setTitle('Błąd!')
  .setDescription(`${user} nie ma żadnych ostrzeżeń`)
  .setColor("RED")
  .setTimestamp()
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
  if(warnings === null) return message.channel.send(embed5)

  db.delete(`warnings_${message.guild.id}_${user.id}`)
  let reset = new Discord.MessageEmbed()
  .setTitle("Zresetowano ostrzeżenia")
  .setColor("#4287f5")
  .addField("Administrator", `${message.author}`)
  .addField("Użytkownik", `${user}`)
  .addField("Usunięte warny", `\`${warnings}\``)
  .addField("serwer", `\`${message.guild.name}\``)
  message.channel.send(reset)
}

module.exports.help = {
    name: "reset-warn"
}