const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {

  let target = message.mentions.users.first()

    let embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Błąd Api.')

let embed2 = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Błąd Bota.')


var c = message.channel;
let { body } = await superagent
.get(encodeURI(`https://nekobot.xyz/api/imagegen?type=iphonex&url=${message.author.displayAvatarURL()}`)).catch((err) => {
    c.send(embed)
    return console.log(err)
  });
      if(!target) try {
            let embed3 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Iphone X!')
            .setImage(body.message)
            .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL());
            c.send(embed3)
          
   } catch (err) {
        c.send(embed2);
         return console.log(err);
   } 
}

module.exports.help = {
    name: "iphone"
}