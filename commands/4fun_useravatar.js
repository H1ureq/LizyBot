const Discord = require("discord.js");
module.exports.run = async (_client, message, args) => { 
    let text = args.join(" ")
    let target = message.mentions.users.first()

    if(target){
    let embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setImage(target.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}))
    .setTimestamp()
    .setFooter()
    message.channel.send(embed);
    } else {
        let embed1 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}))
        .setTimestamp()
        .setFooter()
        message.channel.send(embed1);
    }

}

module.exports.help = {
    name: "avatar"
}