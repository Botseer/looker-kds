module.exports = async (channel) => {

channel.guild.channels.get(`304930941174939649`).send(`**${channel.type}** channel named __**${channel.name}**__ has been removed from this server.`).catch(err => console.error(err));

};
