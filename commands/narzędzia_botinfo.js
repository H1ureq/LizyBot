const Discord = require("discord.js")
const moment = require("moment");
require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
module.exports.run = async (client, message, args) => {
    let Botinfo = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Botinfo")
    .addField("Nazwa:", `${client.user.username}`)
    .addField("Język Bota:", `JS`)
    .addField("Procesor:", `${os.cpus().map(i => `${i.model}`)[0]}`)
    .addField("Prefix:", `!`)
    .addField("Użycie ramu:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)}`)
    .addField("Licencja:", `ClearIT Shops ©`)
    message.channel.send(Botinfo);
}
    

module.exports.help = {
    name: "botinfo"
}