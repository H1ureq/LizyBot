module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    const canvacord = require("canvacord");
    let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() == args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(x => x.displayName.toLowerCase() == args.join(' ').toLocaleLowerCase()) || message.author)
    let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
    let image = await canvacord.Canvas.blur(avatar);
    let attachment = new Discord.MessageAttachment(image, "mediaengine.png");
    
    if(message.attachments.size) {
        var Attachment = (message.attachments)
        let imgfirst = Attachment.array()[0].url
        let image = await canvacord.Canvas.sharpen(imgfirst, 1);
        let attachment = new Discord.MessageAttachment(image, "mediaengine.png");

        return message.channel.send(attachment);
    }

    if(args[0]) {
        if (message.embeds.length > 0) {
            var Attachment = args[0]
            let imgfirst = Attachment
            let image = await canvacord.Canvas.sharpen(imgfirst, 1);
            let attachment = new Discord.MessageAttachment(image, "mediaengine.png");
    
            return message.channel.send(attachment);
        }
        if(message.mentions.members.first()) {
            let user = message.mentions.members.first()
            let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
            let image = await canvacord.Canvas.sharpen(avatar, 1);
            let attachment = new Discord.MessageAttachment(image, "mediaengine.png");
    
            return message.channel.send(attachment);
        }
    }

    message.channel.send("By wybrać obrazek, musisz: `Dodać załącznik`, `Wysłać link do obrazka`, `Oznaczyć osobę by wziąć jej avatar`")

}

module.exports.help = {
    name: "sharpen"
}