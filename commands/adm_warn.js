const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
    const user = message.mentions.members.first()

    let embed7 = new Discord.MessageEmbed()
    .setTitle("Błąd")
    .setColor("RED")
    .setDescription("Nie masz permisji")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    if (!message.member.hasPermission('MANAGE_MEMBERS')) return message.channel.send(embed7);

    let embed2 = new Discord.MessageEmbed()
    .setTitle('Błąd!')
    .setDescription('Oznacz osobę którą chcesz zwarnować.')
    .setColor("RED")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    if (!user) return message.channel.send(embed2)

    let embed3 = new Discord.MessageEmbed()
    .setTitle('Błąd!')
    .setDescription('nie możesz zwarnować bota.')
    .setColor("RED")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    if(message.mentions.users.first().bot) return message.channel.send(embed3)

    const reason = args.slice(1).join(" ")

    let embed4 = new Discord.MessageEmbed()
    .setTitle('Błąd!')
    .setDescription('Nie podałes powodu warna')
    .setColor("RED")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    if(!reason) return message.channel.send(embed4)

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    let embed6 = new Discord.MessageEmbed()
    .setTitle('Błąd!')
    .setDescription(`${user} osiągnął limit warnów czyli \`${warnings}\` warnów`)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    if(warnings === 20) return message.channel.send (embed6) 

    if(warnings === null)
        db.set(`warnings_${message.guild.id}_${user.id}`, 1)
        let warn = new Discord.MessageEmbed()
        .setColor("#10bee6")
        .setTitle("Ostrzeżony")
        .addField("Administrator", `${message.author}`)
        .addField("Użytkownik", `${user}`)
        .addField("Powód", `${reason}`)
        .addField("Serwer", `${message.guild.name}`)
        message.channel.send(warn)
        if(warnings !== null)
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
        let warn1 = new Discord.MessageEmbed()
        .setColor("#10bee6")
        .setTitle("zostałeś Ostrzeżony")
        .addField("Administrator", `${message.author}`)
        .addField("Użytkownik", `${user}`)
        .addField("Powód", `${reason}`)
        .addField("Serwer", `${message.guild.name}`)
        user.send(warn1)
    
}


module.exports.help = {
    name: "warn"
}