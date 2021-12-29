const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (_client, message, args) => {
        let dataJson = fs.readFileSync("./data/users/reps.json");
        var parsowanie = JSON.parse(dataJson);
        // MENTION SECTION
        if(message.mentions.members.first())
        {
        if(parsowanie.hasOwnProperty(message.mentions.users.first().id))
        {
            //SA WARNY -- MENTION
            let dataJson1 = fs.readFileSync("./data/users/reps.json");
            var parsowanie1 = JSON.parse(dataJson1);
            var val1 = parsowanie1[`${message.mentions.users.first().id}`][`repPoints`];   
            let embed2 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle("**PUNKTY REPUTACJI!**")
            .setDescription(`Posiada **${val1}** punktów reputacyjnych.`)
            .setThumbnail('https://static.thenounproject.com/png/739694-200.png')
               message.channel.send(embed2);
            console.log(message.author.id);         
        }
        else
        {
            // NIE MA WARNOW -- MENTION SECTION   
            let embedbrak1 = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle("**PUNKTY REPUTACYJNE!**")
            .setDescription("Nikt jeszcze nie podarował reputacyjnego punktu dla niego.")
            .setThumbnail('https://static.thenounproject.com/png/739694-200.png')
                  message.channel.send(embedbrak1)      
        }
        }
        // NOMENTION SECTION
        else
        {
        if(parsowanie.hasOwnProperty(message.author.id))
        {
            // SA WARNY == NOMENTION SECTION
            let dataJson3 = fs.readFileSync("./data/users/reps.json");
            var parsowanie3 = JSON.parse(dataJson3);
            var val3 = parsowanie3[`${message.author.id}`][`repPoints`];   
            let embed2 = new Discord.MessageEmbed()
             .setColor('BLUE')
             .setTitle("**PUNKTY REPUTACJI!**")
             .setDescription(`Posiada **${val3}** punktów reputacyjnych.`)
             .setThumbnail('https://static.thenounproject.com/png/739694-200.png')
                message.channel.send(embed2);
        }
        else
        {
            // NIE MA WARNOW == NOMENTION SECTION
            let embedbrak = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setTitle("**PUNKTY REPUTACYJNE!**")
    .setDescription("Nikt ci jeszcze nie podarował reputacyjnego punktu.")
    .setThumbnail('https://static.thenounproject.com/png/739694-200.png')
          message.channel.send(embedbrak)
        }
    }
}
module.exports.help = {
    name: "repy"
}