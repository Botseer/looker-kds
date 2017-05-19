exports.run = (client, message) => {
  message.channel.send('Ping?')
    .then(msg => {
      msg.edit(`:ping_pong: Pong! (:blue_heart: took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'ping'
};
