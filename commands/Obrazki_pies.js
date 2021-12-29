const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message) => {

    let embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Błąd Api.')

    let embed2 = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Błąd Bota.')

    var c = message.channel;
     let {body} = await superagent
      .get('https://dog.ceo/api/breeds/image/random').catch((err) => {
        c.send(embed)
        return console.log(err)
      });
            try {
                let embed3 = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('Piesek!')
                .setImage(body.message)
                .setTimestamp()
                .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
                c.send(embed3)
              
       } catch (err) {
            c.send(embed2);
             return console.log(err);
       }
}

module.exports.help = {
    name: "pies"
}