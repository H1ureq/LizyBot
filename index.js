const Discord = require("discord.js");
// Informacja dla aplikacji, że wymaga ona modułu "fs".
var fs = require("fs");
// Informacja dla aplikacji, że wymaga ona PLIKU "config.json", czyli tam gdzie jest token naszego bota.
const config = require("./config.json");
// Zamieniamy naszego bota w klienta Discord.
const client = new Discord.Client();
// a tu do eventow
require("./functions.js")(client);
// Ustawiamy nasze komendy z katalogu "commands".
client.commands = new Discord.Collection();

 /*
const express = require('express');
const keepalive = require('express-glitch-keepalive');

const app = express();

app.use(keepalive);

app.get('/', (req, res) => {
res.json('This bot should be online! Uptimerobot will keep it alive');
});
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);
*/

fs.readdir("./commands/", (err, files) => {
    // Błąd? Pokaż go w konsoli.
    if(err) console.log(err);

    // Szukaj tylko i wyłącznie JS'owych komend w katalogu commands.
    
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    // Sprawdź czy liczba plików jest równa 0. Brak komend w katalogu "commands"? Ten skrypt poinformuje Cię o tym.
    if (jsfile.length <= 0) {
        return console.log("[--:--]: Status [ERROR 404]: File Not Found. Folder 'commands' is empty.");
    }
    // No i końcowa procedura.
    jsfile.forEach((f) => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props);
    });
});

// Jeśli "client" czyli nasz bot jest online zrób coś...
let statuses = [''];
let przerwa = ["🔨 Przerwa Techniczna"]
let aktualizowanie = ["🔧 Aktualizowanie Bota"]
client.on("ready", () => {
   console.log("Jestem gotowy.") 
    setInterval(function(){
        let status = statuses[Math.floor(Math.random()*statuses.length)]

         client.user.setActivity(`${status}`,{type:"WATCHING"});
        }, 10000
    )
});

// Reakcja bota na wiadomość.
client.on("message", async message => {
    let seconds = process.uptime();
    let uptimeD = Math.floor(seconds / (3600 * 24));
    let uptimeH = Math.floor(seconds % (3600 * 24) / 3600);
    let uptimeM = Math.floor(seconds % 3600 / 60);
    let uptimeS = Math.floor(seconds % 60);
  
    const embedfzik = new Discord.MessageEmbed()
    .setTitle("Hejka, w czym moge pomóc?")
    .setColor("BLUE")
    .setDescription(`🤖 Komenda pomocy - \`!pomoc\`
    🆔 Id Serwera: \`${message.guild.id}\`
    😉 Działam już: \`${uptimeD}\` Dni \`${uptimeH}\` Godzin \`${uptimeM}\` Minut \`${uptimeS}\` Sekund
    💖 Wspieram \`${client.users.cache.size}\` użytkowników!
    🏓 Ping: \`${client.ws.ping}\``)
    .setImage("https://cdn.discordapp.com/attachments/919705367036952576/924784703154831420/Nowy_projekt_11.png")
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())



    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
       return message.channel.send(embedfzik);
    }

    // Jeśli autor wiadomości jest botem, zakończ akcje.

    if(message.author.bot) return;
   
    // Jeśli typ kanału jest równy wiadomości bezpośredniej zakończ akcje.
  
    if(message.channel.type === "dm") return;
  
    let prefix = config.prefix;
  
    if(!message.content.startsWith(prefix)) return;
  
    let messageArray = message.content.split(" ");
  
    let cmd = messageArray[0];
 
    let args = messageArray.slice(1);
 
    let commandfile = client.commands.get(cmd.slice(prefix.length));
 
    if(commandfile) commandfile.run(client, message, args);


});


// Logowanie klienta bota.

client.login(config.token);

module.exports = {
    client: client 
}