exports.run = (client, message, args) => {

let messagecount = parseInt(args[0]) + 1;
if(messagecount > 100){
messagecount=100;
}
    message.channel.fetchMessages({limit: messagecount}).then(messages => {
        let msg_array = messages.array();
        message.channel.bulkDelete(msg_array);
        messagecount = msg_array.length;
        message.channel.send(":wastebasket: " + messagecount + ` message has been deleted from **${message.channel.name}**`).then(m => m.delete(7000));
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pruge'],
  permLevel: 1
};

exports.help = {
  name: 'clear',
  description: 'Delete a specified number of messages.',
  usage: 'clear <number>'
};