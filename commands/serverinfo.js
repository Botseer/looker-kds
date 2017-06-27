const Discord = require('discord.js');
const moment = require('moment');
exports.run = (client, message, args) => {

 
const embed = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.setColor(0x4499E7)
.setDescription('\Hello everyone, This is the official server for the discussion about the Dyanmic Emerald hacks created by KDS and DizzyEgg!\nMore info about the server is in the channel #server-info-and-rules.')
.addField('SERVER ID', message.guild.id, true)
.addField('MEMBERS', message.guild.memberCount + " (online: " + message.guild.members.filter(m => ((m.user.presence.status === "online" )||(m.user.presence.status === "dnd" )||(m.user.presence.status === "idle" ))).size + " )", true)
.addField('TEXT CHANNELS', message.guild.channels.filter(c => c.type === "text").size , true)
.addField('VOICE CHANNELS', message.guild.channels.filter(c => c.type === "voice").size , true)
.addField('ROLES', message.guild.roles.size, true)
.addField('CREATED DATE', moment(message.guild.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a'), true)

message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Displays some general information about the server.',
  usage: 'serverinfo'
};
