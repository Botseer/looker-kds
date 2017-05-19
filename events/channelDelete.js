module.exports = async (channel) => {

channel.guild.channels.get(`313617748422950912`).send(`**${channel.type}** channel named __**${channel.name}**__ has been removed from this server.`).catch(err => console.error(err));

};