const request = require("request");
const Discord = require("discord.js");
exports.run = (client, message, args, level) => {
  try {
    request(`https://some-random-api.ml/animu/wink`, function(
      error,
      response,
      body
    ) {
      let json = JSON.parse(body);
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Wink!")
        .setImage(json.link || "BRAK")
        .setTimestamp();
      message.channel.send(embed);
      return;
    });
  } catch (err) {
    const txtemb = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Error: " + err);
    return message.channel.send(txtemb);
  }
};


module.exports.help = {
    name: "wink"
}