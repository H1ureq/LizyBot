const Discord = require('discord.js');
const fs = require('fs');
module.exports.run = async (client, message, args) => { 
    let odpowiedzi = ["Tak.", "Chyba tak.", "Wydaje mi się że nie.", "Wydaje mi się że tak.", "Nie.", "Chyba nie.", "Raczej Tak.", "Raczej Nie."]
    let odp = odpowiedzi[Math.floor(Math.random()*odpowiedzi.length)]
    let text = args.join(" ")
    

    let embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('BŁĄD!')
    .setDescription('Napisz całość pytania!')
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())

    if(!text) return message.channel.send(embed);

    let embed1 = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Poczekaj chwile na odpowiedz.')
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    let edit = await message.channel.send(embed1);

     setTimeout(function() {
        let embed2 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle("O to odpowiedz!")
        .addField("Pytanie:", `${text}`)
        .addField('Odpowiedz:', `${odp}`)
        .setTimestamp()
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        edit.edit(embed2);
     }, 3000 );
    
}

module.exports.help = {
    name: "8ball"
}