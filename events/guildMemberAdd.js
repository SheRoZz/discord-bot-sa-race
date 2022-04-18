const Discord = require('discord.js');

module.exports = {
	name: "guildMemberAdd",
	async execute(member) {
		// member.guild.channels.cache.get("849283385808912384").send(`${member.user} has joined the server!`);
		console.log(member.user);

		const newMemberEmbed = new Discord.MessageEmbed()
			.setColor("#000000")
			.setTitle("Un Nouveau !")
			.setDescription(`${member.user} a rejoint le serveur ! Passe par le CAPTCHA et approuve le <#941826892510658651> pour accéder aux autres channels`)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp();
		
			member.guild.channels.cache.get("941831948593164339").send({
				embeds: [newMemberEmbed] 
			})
	}
}