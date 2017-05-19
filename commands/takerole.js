exports.run = (client, message, args) => {

  if(message.channel.id !== "308184273100210176") return;
  
let role = message.guild.roles.find('name', args[1]);
let member = message.guild.member(message.mentions.users.first());
member.removeRole(role).catch(console.error);
message.channel.send('', {embed: {
  color: parseInt(role.color),
  description: `**${message.mentions.users.first().tag}** just got ${role.name} role removed from the profile.`
}});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'takerole',
  description: 'Removes the role from the profile of the user mentioned.',
  usage: 'takerole <user mention> <role name>'
};