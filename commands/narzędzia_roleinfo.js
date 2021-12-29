const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let role;
  if(args[0] && isNaN(args[0]) && message.mentions.roles.first()) role = message.mentions.roles.first()
  if(args[0] && isNaN(args[0]) && !message.mentions.roles.first()){
    role = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())


    let embed4 = new Discord.MessageEmbed()
    .setTitle('Błąd!')
    .setDescription('Nie znaleziono roli.')
    .setColor("RED")
    .setTimestamp()
    .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
    if(!message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())) return message.channel.send(embed4)
  }
  if(args[0] && !isNaN(args[0])){
    role = message.guild.roles.cache.find(e => e.id == args[0])

    let embed3 = new Discord.MessageEmbed()
    .setTitle('Błąd!')
    .setDescription('Nie znaleziono roli.')
    .setColor("RED")
    .setTimestamp()
    .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
    if(!message.guild.roles.cache.has(args[0])) return message.channel.send(embed3)
  }
  let embed2 = new Discord.MessageEmbed()
  .setTitle('Błąd!')
  .setDescription('Nie oznaczyłeś roli.')
  .setColor("RED")
  .setTimestamp()
  .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
  if(!role) return message.channel.send(embed2)
let rolemembers;
if(role.members.size > 20) rolemembers = role.members.map(e => `<@${e.id}>`).slice(0,20).join(", ") + ` i ${role.members.size - 20} więcej członków...`
if(role.members.size < 20) rolemembers = role.members.map(e => `<@${e.id}>`).join(", ")

  let embed = new Discord.MessageEmbed()
  .setColor("#02FF2A")
  .addField("Nazwa roli", `${role.name}(<@&${role.id}>)`)
  .addField("ID roli", `${role.id}`)
  .addField("Rola mentionable:", `${role.mentionable.toString().replace("true","Tak").replace("false","Nie")}`)
  .addField("ilość członków roli:", `${role.members.size || 0}`)
  .addField("Członkowie roli;",rolemembers || "Nie znaleziono")

  message.channel.send(embed)
}




module.exports.help = {
    name: "roleinfo"
}