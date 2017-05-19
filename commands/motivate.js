exports.run = (client, message, args) => {

//if(message.channel.id !== "308184273100210176")
//{
//    message.reply("Look in this channel <#308184273100210176>").then(m => m.delete(7000));
//}

var motivatemsg=
[
    "Train you mind to see good in every situation",
    "Difficult road often lead to beautiful destinations.",
    "If it doesn't challenge you, it won't change you!",
    "Your only limit is you.",
    "Don't watch the clock; Do what it does **KEEP GOING** !",
    "Tough time never lasts, but tough people do.",
    "A tiget doesn't lose sleep over the opinion of sheep.",
    "Stay POSITIVE, WORK HARD, and make it happen.",
    "A river cuts though the rock, not because of its power, but because of its persistence.",
    "Expect PROBLEMS and eat them from BREAKFAST!",
    "Repeat after me **I CAN DO THIS**.",
    "Start where you are.\nUse what you can.\nDo what you can",
    "Stars can't shine without darkness.",
    "**YOU CAN and YOU WILL**",
    "Wake up with determination.\nGo to bed with satisfaction.",
    "Work hard in silence, let your success be your noise.",
    "Don't limit your challenges.\nChallenge you limits.",
    "Don't be afraid to FAIL.\n**BE AFRAID TO FAIL**.",
    "You fail only when you __STOP TRYING__!"
]

var randomNumber = Math.floor(Math.random()*motivatemsg.length);
let msgtosend = motivatemsg[randomNumber]

/*message.guild.channels.get("308184273100210176")*/message.channel.send('', {embed: {
  color: 8910953,
  description: ":ballot_box_with_check: " + msgtosend
}});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'motivate',
  description: 'sends a motivational message to the channel messaged.',
  usage: 'motivate'
};