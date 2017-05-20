const Discord = require('discord.js');
exports.run = (client, message, args) => {

 if(message.channel.id !== "308184273100210176") return;
 
const embed = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.setColor(0x4499E7)
.setDescription('\nHello everyone, This is a server for pokemon lovers and friendly users around.\nYou can share all your idea about pokemon, talk about rom-hacking and also suggest some improvements as well.')
.addField('SERVER ID', message.guild.id, true)
.addField('OWNER', message.guild.owner.user.tag, true)
.addField('MEMBERS', message.guild.memberCount + " (online: " + message.guild.members.filter(m => ((m.user.presence.status === "online" )||(m.user.presence.status === "dnd" )||(m.user.presence.status === "idle" ))).size + " )", true)
.addField('TEXT CHANNELS', message.guild.channels.filter(c => c.type === "text").size-1 , true)
.addField('VOICE CHANNELS', message.guild.channels.filter(c => c.type === "voice").size , true)
.addField('ROLES', message.guild.roles.size, true)
.addField('CREATED DATE', message.guild.createdAt, true)

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
