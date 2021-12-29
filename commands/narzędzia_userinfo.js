const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let komenda = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Userinfo")
    .addField("Nazwa", `${message.author.username}`)
    .addField("Tag", `${message.author.tag}`)
    .addField("ID", `${message.author.id}`)
    .addField("Najwyższa Rola", `${message.member.roles.highest}`)
    .addField("Ilośc roli", `${message.member.roles.cache.size -1}`)
    .addField("Konto stworzone", `${message.author.createdAt.toLocaleString()}`)
    message.channel.send(komenda);
};



module.exports.help = {
    name: "userinfo"
};