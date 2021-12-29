const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let osoba = message.mentions.members.first()
    
    let perms = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Błąd!")
    .setDescription("Nie masz permisji!")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())

    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(perms)
    
    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Błąd!")
    .setDescription("Nie oznaczyłeś osoby której chcesz odebrać role!")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL()) 
    
    if (!osoba) return message.channel.send(embed);

    let embed1 = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Błąd")
    .setDescription("Nie wpisałeś roli lub podana nie istnieje! \n \n `Ps. Wszystkie litery musza się zgadzać z nazwą roli`")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    let text = args.splice(1).join(" ")
    let rola = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name === text)

    if(!rola) return message.channel.send(embed1);
  
    
    osoba.roles.remove(rola);

    let embed2 = new Discord.MessageEmbed()
    .setColor("#4287f5")
    .setTitle("Sukces")
    .setDescription("Rola została odebrana")
    .addField("Rola", `${rola}`)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(embed2)


    
    
}


module.exports.help = {
    name: "removerole"
}