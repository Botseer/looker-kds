const config = require('../config.json');
exports.run = (client, message, args) => {
  
  if(message.channel.id !== "308184273100210176") return;

  message.channel.send("Hi there, is it that you wanted to invite your friend to this server??\nIf yes then you can use this like:\nhttps://discord.gg/y8ru3A3");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Displays the invite link to this server.',
  usage: 'invite'
};