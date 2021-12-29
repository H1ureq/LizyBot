const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let Ban = message.mentions.members.first()

    let perms = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Błąd!")
    .setDescription("Nie masz permisji!")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())

    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(perms);

    let embed2 = new Discord.MessageEmbed()
    .setTitle('❌ Błąd!')
    .setDescription('Oznacz osobę którą chcesz zbanować.')
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
  
    if (!Ban) return message.channel.send(embed2);
  
    let embed3 = new Discord.MessageEmbed()
    .setTitle('❌ Błąd!')
    .setDescription('Nie możesz zbanować sam siebie.')
    .setColor("RED")
    .setTimestamp()
    .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
  
    if (Ban.id === message.author.id) return message.channel.send(embed3);

    let embed4 = new Discord.MessageEmbed()
    .setTitle(':x: Błąd!')
    .setDescription('Nie możesz zbanować użytkownika z wyższą rolą od obecnie posiadanej.')
    .setColor("RED")
    .setTimestamp()
    .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
  
    if (Ban.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(embed4);
  
    let reason = args.splice(1).join(" ") || "Brak";

    Ban.ban({
        reason: reason
    })
  
    let embed1 = new Discord.MessageEmbed()
      .setTitle(":white_check_mark: Sukces.")
      .addFields(
          { name: 'Administrator', value: `${message.author} - ${message.author.tag}, ${message.author.id}`, inline: false },
          { name: 'Zbanowany', value: `${Ban} - ${Ban.user.tag} ${Ban.id}`, inline: false },
          { name: 'Powód', value: `${reason}`, inline: false },
          { name: 'Serwer', value: `${message.guild.name}`, inline: false },)
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
    message.channel.send(embed1)
  
    let embed5 = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("Otrzymałeś bana na serwerze.")
            .addFields(
              { name: 'Administrator', value: `${message.author} - ${message.author.tag}`, inline: false },
              { name: 'Zbanowany', value: `${Ban} - ${Ban.user.tag}`, inline: false },
              { name: 'Powód', value: `${reason}`, inline: false },
              { name: 'Serwer', value: `${message.guild.name}`, inline: false },)
              Ban.send(embed5).catch(err => {
                console.log("sraka" + err) 
                message.channel.send("Niestety nie mogę wysłać powiadomienia do zbanowanej osoby.")
              });
}

module.exports.help = {
    name: "ban"
}