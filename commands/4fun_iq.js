const Discord = require("discord.js");
const random = require("random");
const randomInt = require("random-int");

module.exports.run = async (client, message, args) => {
let randomInt = random.int(2, 90);
    let emoji = "✅"
        let embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Obliczanie w toku...')
            let editmsg = await message.channel.send(embed);
            setTimeout(function() {
                let embed1 = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Maszyna skończyła obliczać')
                .setDescription(`**${message.author.username}** posiada **${randomInt}** iq 🧠`)
                .setTimestamp()
                .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
                    editmsg.edit(embed1).then((msg) => msg.react(emoji)); 
                        }, 2000);
                                    } 

module.exports.help = {
    name: "iq"
}