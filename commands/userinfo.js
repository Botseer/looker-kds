const moment = require('moment');
exports.run = function(client, message, args) {

  if(message.channel.id !== "308184273100210176") return;

  let tempn = message.author.id;
	let ui_name = client.guilds.get(message.guild.id).members.get(tempn);  
	let spymsg = [
		'USER INFO',
		`User ID   : ${ui_name.user.id}`,
		`Username  : ${ui_name.user.username}`,
		`Nickname  : ${ui_name.nickname}`,
		`Discrim   : #${ui_name.user.discriminator}`,
		`Bot       : ${ui_name.user.bot}`,
		`Joined    : ${moment(ui_name.joinedAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}`,
		`Created   : ${moment(ui_name.user.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}`
	];
    message.channel.send(spymsg).then(m => m.editCode('LDIF', spymsg).catch(error => console.log(error.stack)).catch(error => console.log(error.stack)))
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
