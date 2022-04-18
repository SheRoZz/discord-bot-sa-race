module.exports = {
	name: "guildMemberRemove",
	async execute(member) {
		member.guild.channels.cache.get("941831948593164339").send(`${member.user} a quitté le serveur`);
	}
}