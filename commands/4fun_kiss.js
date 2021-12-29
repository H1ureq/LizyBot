const Discord = require("discord.js"); 
module.exports.run = async(client, message, args) => {
    const target = message.mentions.users.first()
    

    const subreddits = [
      'https://media.discordapp.net/attachments/461953165873512449/461953304218566676/image.gif?width=375&height=202',
      'https://media.discordapp.net/attachments/461953165873512449/461953343074336779/image.gif?width=375&height=293',
      'https://media.discordapp.net/attachments/461953165873512449/461953403195490304/image.gif?width=375&height=211',
      'https://media.discordapp.net/attachments/461953165873512449/461953431893180456/image.gif?width=375&height=210',
      'https://media.discordapp.net/attachments/461953165873512449/461953470849613824/image.gif?width=375&height=183',
      'https://media.discordapp.net/attachments/461953165873512449/461953485877805056/image.gif?width=375&height=211',
      'https://media.discordapp.net/attachments/461953165873512449/461953533810573312/image.gif?width=183&height=225',
      'https://media.discordapp.net/attachments/461953165873512449/461953582195933185/image.gif?width=306&height=150',
      'https://media.discordapp.net/attachments/461953165873512449/461953585085677568/image.gif?width=375&height=173',
      'https://media.discordapp.net/attachments/461953165873512449/461953620183744512/image.gif?width=375&height=162',
      'https://media.discordapp.net/attachments/461953165873512449/461953635023192074/image.gif?width=375&height=199',
      'https://media.discordapp.net/attachments/461953165873512449/461953717273624577/image.gif?width=375&height=212',
      'https://media.discordapp.net/attachments/461953165873512449/461953762546679808/image.gif?width=375&height=189',
      'https://media.discordapp.net/attachments/461953165873512449/461953835666243584/image.gif?width=375&height=188',
      'https://media.discordapp.net/attachments/461953165873512449/461953862140559360/image.gif?width=394&height=188',
      'https://media.discordapp.net/attachments/461953165873512449/461953886811586561/image.gif?width=375&height=150',
      'https://media.discordapp.net/attachments/461953165873512449/461953888149307392/image.gif?width=375&height=155',
      'https://media.discordapp.net/attachments/461953165873512449/461953921716453387/image.gif?width=375&height=156',
      'https://media.discordapp.net/attachments/461953165873512449/461953921716453387/image.gif?width=375&height=156',
      'https://media.discordapp.net/attachments/461953165873512449/461953925126291467/image.gif?width=375&height=150',
      'https://media.discordapp.net/attachments/461953165873512449/461953953769455626/image.gif?width=375&height=210',
      'https://media.discordapp.net/attachments/461953165873512449/461953956537565204/image.gif?width=374&height=209',
      'https://media.discordapp.net/attachments/461953165873512449/461953982865342465/image.gif?width=338&height=338',
      'https://media.discordapp.net/attachments/461953165873512449/461953984530481163/image.gif?width=345&height=274',
  
  
          
      ]
      const sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    if(!target){
        let embed2 = new Discord.MessageEmbed()
         .setTitle('<a:nie:816612732437921863> Błąd!')
         .setDescription('Oznacz osobę którą chcesz pocałować ')
         .setColor("RED")
         .setTimestamp()
         .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
         message.channel.send(embed2);
         return;
    }

    const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Pocałunek ")
    .setDescription(`**${message.author.username}** pocałował **${target.username}**`)
    .setImage(sub)
    .setTimestamp()
    .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
    message.channel.send(embed);



}

module.exports.help = {
    name: "kiss"
}