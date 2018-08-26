function warn(x){
  var usr = x.msg.mentions.users.array()[0];
  usr.send("You have been warned on " + x.msg.guild.name + " for the following reason: \n\n" + x.args);

  try {
    x.database.query("SELECT * FROM guilds WHERE guild_id = " + messageDelete.guild.id, function(err, result, fields) {

      var embed = new Discord.RichEmbed()
      .setTitle("A new case has been created")
      .setAuthor("Dantè", "https://darkmanethelion.co.uk/img/profile.png")
      /*
      * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
      */
      .setColor('#FF0000')
      .setDescription('**A new case has been created!** \n\n*Type:* WARNING \nReason: ' + x.args)
      .setFooter('Message sent by ' + messageDelete.author.username + '#' + messageDelete.author.discriminator + ' | Damien Beta')
      .setTimestamp();

      try {
        x.client.channels.get(result[0].caselogs).sendMessage({
          embed
        });
      } catch (err) {
        return;
      }
    })
  }

  catch(e)
  {
    console.log(e);
  }
}

function addCmds(x) {
  x['warn'] = warn;
}


module.exports = {
  addCmds: addCmds
};
