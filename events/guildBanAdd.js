module.exports = async (guild, user) => {

channel.guild.channels.get(`304930941174939649`).send(`**${user.tag}** has been banned from __**${guild.name}**__ !`).catch(err => console.error(err));

};
