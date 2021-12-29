const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

const twojastara = message.mentions.users.first() || message.author
const sheesh = './images/covid.png'
const dupa = [`${twojastara} nie posiada coronavirusa`, `${twojastara} posiada coronavirusa`]
const kupa = dupa[Math.floor(Math.random() * dupa.length)]
if(!twojastara){
    let covid = new Discord.MessageEmbed()
    .setColor("#2f96eb")
    .setTitle("Coronavirus")
    .attachFiles(sheesh, "covid.png")
    .setImage("attachment://covid.png")
    .setDescription(kupa)
     message.channel.send(covid) 
 }else if(twojastara){
    let covid = new Discord.MessageEmbed()
    .setColor("#2f96eb")
    .setTitle("Coronavirus")
    .attachFiles(sheesh, "covid.png")
    .setImage("attachment://covid.png")
    .setDescription(kupa)
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(covid)
    }
}

module.exports.help = {
    name: "covid"
}   


