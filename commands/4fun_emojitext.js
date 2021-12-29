const Discord = require("discord.js");
const random = require("random");
module.exports.run = async(client, message, args) => {
        
        const { convert } = require("discord-emoji-convert")

        let embedbladargs = new Discord.MessageEmbed()
        .setTitle('Błąd!')
        .setDescription('Napisz wiadomość jaką mam wygenerować.')
        .setColor("RED")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp()
        if (!args[0]) return message.channel.send(embedbladargs)
        let arugment = args.join(' ')
        if(arugment.lenght > 200) return message.channel.send("O nie! Za dużo tekstu, max to 200")
        const embedd = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle(`Wygenerowano!`)
        .setDescription(convert(args.join('\n')))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embedd).catch(err => {
            console.log("Za duzo tekstu XD " + err) 
            return message.channel.send("O nie! Za dużo tekstu")
          })   
    }

    module.exports.help = {
        name: "emoji-text"
    }