module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    const canvacord = require("canvacord");
    let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() == args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(x => x.displayName.toLowerCase() == args.join(' ').toLocaleLowerCase()) || message.author)
    let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
    let image = await canvacord.Canvas.delete(avatar, false);
    let attachment = new Discord.MessageAttachment(image, "mediaengine.png");
    
    return message.channel.send(attachment);
}

module.exports.help = {
    name: "delete"
}