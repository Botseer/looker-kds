exports.run = (client, message, args) => {

client.user.setGame(args.join(" "));

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'setgame',
  description: 'Set the game I will be playing.',
  usage: 'setgame <game name>'
};
