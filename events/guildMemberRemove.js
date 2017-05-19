module.exports = async (member) => {

var byebyemsg = 
 [
    `**${member.user.tag}** is gone, Cries !!!`,
    `**${member.user.tag}** ran away seeing a :snake: :stuck_out_tongue_winking_eye:`,
    `We have lost our player **${member.user.tag}**!`,
    `We need a substitute for **${member.user.tag}**.`,
	`Please say goodbye to **${member.user.tag}** we will miss you!`,
	`**${member.user.tag}** left without telling bye :neutral_face: .`,
	`I had sensed something wiered about **${member.user.tag}**`
 ]
  var randomNumber = Math.floor(Math.random()*byebyemsg.length);  
  const embed = new Discord.RichEmbed()  
  .setColor(0xE0082d)
  .setDescription(byebyemsg[randomNumber])
  .setThumbnail(member.user.displayAvatarURL)
  .setFooter(`User Leave `)
  .setTimestamp()
  member.guild.channels.get(`304930941174939649`).send(embed).catch(err => console.error(err));

};
