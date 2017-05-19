module.exports = async (guild, user) => {

channel.guild.channels.get(`313617748422950912`).send(`**${user.tag}** has been banned from __**${guild.name}**__ !`).catch(err => console.error(err));

};