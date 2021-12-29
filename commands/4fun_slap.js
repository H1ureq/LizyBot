const Discord = require("discord.js");
module.exports.run = async (_client, message, args) => {
    
    let target = message.mentions.users.first()

    let embedblad = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("BŁĄD!")
    .setDescription('Poprawne użycie: `!slap @user`')

    if(!target) return message.channel.send(embedblad);

    const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`**${message.author.username}** uderzył ${target} `)
    .setImage("https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif")
    message.channel.send(embed);
    
}


module.exports.help = {
    name: "slap"
}