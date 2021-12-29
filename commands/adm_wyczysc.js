const Discord = require("discord.js");

module.exports.run = async (_client, message, args) => {
    message.delete();
    let embedbladargs = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('BŁĄD!')
    .setDescription('Nie podałeś liczby!')

    let embedbladperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('BŁĄD!')
    .setDescription('Nie posiadasz permisji!')

    let embedsukces = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('SUKCES!')
    .setDescription(`Usunięto **${args[0]}** wiadomości! :bell:`)

    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embedbladperm);
    if(isNaN(args[0])) return message.channel.send(embedbladargs);
    if(!args[0]) return message.channel.send(embedbladargs);
    if(!message.deletable) return message.channel.send("Wiadomości są starsze niż 2 tygodnie.")
    try{
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(embedsukces).then(msg => msg.delete(5000));
        message.delete();
    })} catch(e){
        console.log(e.stack);
    }
}

module.exports.help = {
    name: "wyczysc"
}