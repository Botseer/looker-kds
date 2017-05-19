module.exports = async (guild, user) => {

channel.guild.channels.get(`308184273100210176`).send(`**${user.tag}** has been banned from __**${guild.name}**__ !`).catch(err => console.error(err));

};
