exports.run = (client, message, args) => {

if(message.channel.id !== (("308184273100210176") || ("304926866995937282"))) return;

let role = message.guild.roles.find('name', args[1]);
let member = message.guild.member(message.mentions.users.first());
member.addRole(role).catch(console.error);
message.channel.send('', {embed: {  
  color: parseInt(role.color),
  description: `**${message.mentions.users.first().tag}** now has ${role.name} role added to the profile.`
}});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['give'],
  permLevel: 1
};

exports.help = 
{
    name: 'giverole',
    description: 'Adds the specified role to the specified user.',
    usage: 'giverole <User-mention> <role-name>'
}