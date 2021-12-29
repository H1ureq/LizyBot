const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

    let reason = args.slice(1).join(" ")
    let userId = args[0]
    
   
    
    
    if(!reason) reason = 'Nie podałeś powodu'

	let embed4 = new Discord.MessageEmbed()
    .setTitle('<a:nie:816612732437921863> Błąd!')
    .setDescription('Nie podałeś id gracza którego chcesz odbanować')
    .setColor('#ed0000')
    .setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
    if(!userId) return message.channel.send(embed4)

    message.guild.fetchBans().then(async bans => {

		let embed3 = new Discord.MessageEmbed()
    	.setTitle('<a:nie:816612732437921863> Błąd!')
    	.setDescription('Nikt nie jest zbanowany na tym serwerze')
    	.setColor('#ed0000')
    	.setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
        if(bans.size === 0) return message.channel.send(embed3)
        let BannedUser = bans.find(ban => ban.user.id == userId)

		let embed2 = new Discord.MessageEmbed()
    	.setTitle('<a:nie:816612732437921863> Błąd!')
    	.setDescription('ten użytkownik nie ma bana')
    	.setColor('#ed0000')
    	.setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
        if(!BannedUser) return message.channel.send(embed2)
        await message.guild.members.unban(BannedUser.user, reason).catch(err =>{
            return message.channel.send("coś poszło nie tak!")

        }).then(() => {
			let embed1 = new Discord.MessageEmbed()
    		.setTitle('Użytkownik odbanowany')
			.addField("Administrator", `${message.author}`)
			.addField("odbanowany", `${userId}`)
    		.setColor('#ed0000')
    		.setFooter(`${message.author.tag} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
            message.channel.send(embed1)
        })
    })

}

module.exports.help = {
    name: "unban"
}

