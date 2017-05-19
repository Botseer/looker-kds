module.exports = async (channel) => {

channel.guild.channels.get(`308184273100210176`).send(`**${channel.createdAt}**:\nNew **${channel.type}** channel named __**${channel.name}**__ has been added to this server.`).catch(err => console.error(err));

};
