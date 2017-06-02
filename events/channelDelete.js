module.exports = async (channel) => {
return;
channel.guild.channels.get(`308184273100210176`).send(`**${channel.type}** channel named __**${channel.name}**__ has been removed from this server.`).catch(err => console.error(err));

};
