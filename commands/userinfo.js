const Discord = require('discord.js');
const moment = require('moment');
exports.run = function(client, message, args) {
 
let tempn;
if (message.mentions.users.size === 0){
	tempn = message.author.id;
}else{
	tempn = message.mentions.users.first().id;
}
    let ui_name = client.guilds.get(message.guild.id).members.get(tempn);
	
    	const embed = new Discord.RichEmbed()
		.setAuthor(ui_name.user.username, ui_name.user.avatarURL)
		.setColor('RANDOM')
		.addField('Username', ui_name.user.username, true)
		.addField('Nickname', ui_name.nickname, true)
		.addField('Created', moment(ui_name.user.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a'))
		.addField('Joined', moment(ui_name.joinedAt).format('dddd, MMMM Do YYYY, h:mm:ss a'))
		.addField('Discrim', `#**${ui_name.user.discriminator}**`)
		.addField('Status', ui_name.user.presence.status,true)
		.addField('Bot', ui_name.user.bot,true)
	message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Sends some info about the user using this command.',
  usage: 'userinfo'
};
