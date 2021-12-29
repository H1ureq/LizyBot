const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Błąd Api.')

let embed2 = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Błąd Bota.')

let embed3 = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("BŁĄD SKŁADNI!")
.setDescription("Nie podano tekstu!")

if(!args.join(" ")) return message.channel.send(embed3)

var c = message.channel;
let { body } = await superagent
.get(encodeURI(`https://nekobot.xyz/api/imagegen?type=fact&text=${args.join(" ")}`)).catch((err) => {
    c.send(embed)
    return console.log(err)
  });
        try {
            let embed3 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Fakt!')
            .setImage(body.message)
            .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL());
            c.send(embed3)
          
   } catch (err) {
        c.send(embed2);
         return console.log(err);
   }
}
module.exports.help = {
  name: "fakt"
}
    