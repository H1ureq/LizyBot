module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    const canvacord = require("canvacord");
    if(!args.join(" ")) return message.channel.send("<:no:912396046020280360> No text provided");
    let image = await canvacord.Canvas.changemymind(args.join(" "));
    let attachment = new Discord.MessageAttachment(image, "changemymind.png");
    
    return message.channel.send(attachment);
}

module.exports.help = {
    name: "changemymind"
}