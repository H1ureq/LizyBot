const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let kick = message.mentions.members.first()

  let perms = new Discord.MessageEmbed() 
  .setColor("RED")
  .setTitle(`:x: Błąd!`)
  .setDescription("Nie posiadasz permisji!")
  .setTimestamp()
  .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
  
  
  if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(perms);

  let embed2 = new Discord.MessageEmbed()
  .setTitle(':x: Błąd!')
  .setDescription('Nie oznaczyłeś osoby której chcesz wyrzucić.')
  .setColor("RED")
  .setTimestamp()
  .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)

  if (!kick) return message.channel.send(embed2);

  let embed3 = new Discord.MessageEmbed()
  .setTitle(':x: Błąd!')
  .setDescription('Nie możesz wyrzucić sam siebie.') 
  .setColor("RED")
  .setTimestamp()
  .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)

  if (kick.id === message.author.id) return message.channel.send(embed3);

  let embed4 = new Discord.MessageEmbed()
  .setTitle(':x: Błąd!')
  .setDescription('Nie możesz wyrzucić osoby z rolą wyższą od ciebie')
  .setColor("RED")
  .setTimestamp()
  .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)

  if (kick.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(embed4);

  let reason = args.splice(1).join(" ") || "Brak";

  kick.kick({
      reason: reason
  })

  let embed1 = new Discord.MessageEmbed()
    .setTitle("✅ Sukces.")
    .addFields(
        { name: 'Administrator', value: `${message.author} - ${message.author.tag} (\`${message.author.id}\`)` , inline: false },
        { name: 'Wyrzucony', value: `${kick} - ${kick.user.tag} (\`${kick.user.id}\`)`, inline: false },
        { name: 'Powód', value: `${reason}`, inline: false },
        { name: 'Serwer', value: `${message.guild.name}`, inline: false },)
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
  message.channel.send(embed1)

  let embed5 = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setTitle("Otrzymałeś kicka z serwera.")
          .addFields(
            { name: 'Administrator', value: `${message.author} - ${message.author.tag}`, inline: false },
            { name: 'Wyrzucony', value: `${kick} - ${kick.user.tag}`, inline: false },
            { name: 'Powód', value: `${reason}`, inline: false },
            { name: 'Serwer', value: `${message.guild.name}`, inline: false },)
            kick.send(embed5).catch(err => {
                console.log("sraka" + err) 
                message.channel.send("Niestety nie mogę wysłać powiadomienia do zbanowanej osoby.")
              });
          }

exports.help = {
  name: "kick",
};