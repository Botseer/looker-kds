exports.run = (client, message, args) => {

client.user.setStatus(args[0]);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'setstatus',
  description: 'Set my status.',
  usage: 'setstatus <status>'
};
