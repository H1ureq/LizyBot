module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    const canvacord = require("canvacord");
    
    if(message.attachments.size) {
        var Attachment = (message.attachments)
        let imgfirst = Attachment.array()[0].url
        let image = await canvacord.Canvas.brightness(imgfirst, 50);
        let attachment = new Discord.MessageAttachment(image, "mediaengine.png");

        return message.channel.send(attachment);
    }

    if(args[0]) {
        if (message.embeds.length > 0) {
            var Attachment = args[0]
            let imgfirst = Attachment
            let image = await canvacord.Canvas.brightness(imgfirst, 50);
            let attachment = new Discord.MessageAttachment(image, "mediaengine.png");
    
            return message.channel.send(attachment);
        }
        if(message.mentions.members.first()) {
            let user = message.mentions.members.first()
            let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
            let image = await canvacord.Canvas.brightness(avatar, 50);
            let attachment = new Discord.MessageAttachment(image, "mediaengine.png");
    
            return message.channel.send(attachment);
        }
    }

    message.channel.send("By wybrać obrazek, musisz: `Dodać załącznik`, `Wysłać link do obrazka`, `Oznaczyć osobę by wziąć jej avatar`")

}

module.exports.help = {
    name: "brightness"
}