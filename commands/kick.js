const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let reason = args.splice(1, args.length).join(' ');
  if (!reason) return message.reply('You must supply a reason for the kick.').catch(error => console.error(error));
  let guild = message.guild;
  let person = message.mentions.users.first();
  if (!person) return message.reply('You must mention someone to kick them.').catch(error => console.error(error));
  if (!message.guild.member(person).kickable) return message.reply('This member is not kickable.').catch(error => console.error(error));
  try {
    await person.sendMessage(`${person.username}, you have been kicked from **${guild.name}** because _${reason}_`);
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'kick')
    .addField('User:', `${user.tag} (${user.id})`)
    .addField('Moderator:', `${message.author.tag}`)
    .addField('Reason', reason);
    await message.channel.send(embed);
  } catch (error) {
    console.error(error);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'kick',
  description: 'kicks a user from the server.',
  usage: 'kick <mention> <reason>'
};
