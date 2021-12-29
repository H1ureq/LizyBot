const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let help = new discord.MessageEmbed()
    .setTitle("Help")
    .setColor("#15cce8")
    .addField("Administracyjne", "**clear**, **ban**, **kick**, **unban**, **addrole**, **warn**, **removerole**, **reset-warn**, **warning**")
    .addField("Bot", "**pomoc**, **ping**")
    .addField("4Fun", "**8ball**, **emoji-text**, **fakt**, **kiss**, **hug**, **kijek**, **iq**, **rep**, **repy**, **slap**, **avatar**, **przytul**, **covid**, **howgay**, **iphone**")
    .addField("Zdjęcia", "**blur**, **brightness**, **circle**, **darkness**, **greyscale**, **sepia**, **sharpen**, **threshold**, **pies**, **kot**, **lis**, **koala**, **panda**, **czerwona_panda**, **wink**, **ptak**")  
    .addField("Memy", "**beautiful**, **changemymind**, **clyde**, **delete**, **facepalm**, **hitler**, **jail**, **lgbt**, **rip**, **shit**, **trash**, **triggered**")
    .addField("Narzędzia", `**Botinfo**, **channelinfo**, **serverinfo**, **roleinfo**, **userinfo**, **emoji**`)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    .setImage("https://cdn.discordapp.com/attachments/919705367036952576/924784703154831420/Nowy_projekt_11.png")
    .setTimestamp()
    message.channel.send(help)
};

module.exports.help = {
    name: "pomoc"
};