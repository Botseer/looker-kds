exports.run = (client, message, args) => {

if (message.channel.id !=="308184273100210176") return;

let tempmsg = args.join(" ");
message.delete();

message.channel.send("**" + tempmsg + "**");

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'The bot says what you type.',
  usage: 'say <message>'
};
