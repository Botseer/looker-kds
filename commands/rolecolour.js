exports.run = (client, message, args) => {

if(message.channel.id !== "308184273100210176") return;

let newrolecolour = 000000;

if(args[1])
{
    newrolecolour=args[1];
}
message.guild.createRole(
    {
        name:args[0],
        color:'#'+newrolecolour,
        mentionable:false,
        hoist:false,
        permissions:["ADD_REACTIONS","READ_MESSAGES","SEND_MESSAGES","SEND_TTS_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","EXTERNAL_EMOJIS","CONNECT","SPEAK","CHANGE_NICKNAME","USE_VAD"]
    }
    ).catch(error => console.log(error));

message.channel.send('', {embed: {  
  color:  parseInt("0x"+newrolecolour),
  description: "New role named **" + args[0] + "** has been added to this server !"
}});

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['coloured','rcolour'],
  permLevel: 1
};

exports.help = {
  name: 'rolecolour',
  description: 'Adds a new colour role with general permissions.',
  usage: 'rolecolour <role-name> <colour value in hex>'
};