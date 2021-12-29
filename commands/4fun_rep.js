const fs = require('fs');
const Discord = require('discord.js');
const repDelay = new Set();
const timer = 86400000;
module.exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('BŁĄD!')
    .setDescription('Dla kogo ten rep? Nikt nie został oznaczony!')

    let embed1 = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('BŁĄD!')
    .setDescription("Naprawde? Sobie chcesz dać repa? To nie możliwe.")

    let embed2 = new Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle("BŁĄD!")
    .setDescription("Możesz dać repa za 24h dopiero")

  
    

    let data = JSON.parse(fs.readFileSync("./data/users/reps.json", "utf8"));
        if(repDelay.has(message.author.id)){
            message.channel.send(embed2);
        } else {            
            var guild = message.guild
            let mention = message.mentions.users.first() 
             if(!mention) return message.channel.send(embed)
              if(mention.id == message.author.id) return message.channel.send (embed1)

            if (!data[mention.id]) {
                data[mention.id] = {
                  repPoints: 0
                }
                fs.writeFileSync("./data/users/reps.json", JSON.stringify(data, null, 2), (err) => {
                  if(err) return console.log("kurwa bobry gryzą");
                });
              }

            

             data[mention.id].repPoints += 1


             let embed3 = new Discord.MessageEmbed()
             .setColor('BLUE')
             .setTitle("**PUNKT REPUTACJI!**")
             .setDescription(`Pomyślnie dodano punkt reputacyjny dla ${mention}. Posiada teraz **${data[mention.id].repPoints}** punkty reputacyjne`)
             .setThumbnail('https://static.thenounproject.com/png/739694-200.png')
                message.channel.send(embed3)
            
                    fs.writeFile('./data/users/reps.json', JSON.stringify(data), (err) => {
                        if(err) return console.log(err);
                    });
                    
                repDelay.add(message.author.id);
                 setTimeout(async () => {
                        repDelay.delete(message.author.id);
                 }, timer);
        }
}

module.exports.help = {
    name: "rep"
}