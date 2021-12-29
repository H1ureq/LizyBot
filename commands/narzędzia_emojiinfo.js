const Discord = require("discord.js");
const moment = require("moment")
const ImageURLOptions = { format: "png", dynamic: true, size: 1024 };
module.exports.run = async(client, message, args) => {


    const emotka = message.guild.emojis.cache.get(`${args}`) || message.guild.emojis.cache.find(emoji => emoji.name === `${args}`);

    if(!args[0]){
        const blad = new Discord.MessageEmbed()
        .setTitle(' Błąd!')
        .setDescription(`Nie podano emotki którą chcesz wyszukać. \n Przykład: \`!emoji nazwaemotki\``)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
        message.channel.send(blad);
        return;
    }

    if(!emotka === true){
        const error = new Discord.MessageEmbed()
        .setTitle('Błąd!')
        .setDescription(`Emotka nie została odnaleziona lub nie istnieje! \n Ps.\`Musisz wpisac nazwe emotki a nie emotke ;)\``)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
        message.channel.send(error);
        return;
    }
    
    const twojstary = `${emotka.animated}`
    const twojastara = twojstary.replace("true", "Tak").replace("false", "Nie")

    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .setTitle(`Informacje o emotce`)
    .addField("Nazwa emotki:", `${emotka.name}`)
    .addField("Emotka animowana?", twojastara)
    .addField("Id emotki:", `${emotka.id}`)
    .addField("Dodana:", `${emotka.createdAt.toLocaleString()}`)
    .setThumbnail(emotka.url)
    message.channel.send(embed);
}

module.exports.help = {
    name: "emoji"
    }
