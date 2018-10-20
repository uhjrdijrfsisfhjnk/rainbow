const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

var prefix = "!"


client.on('ready', async () => {
    let rSpeed = 4; 
    let rGuild = '495305349499453450'; // اي دي السيرفر 
    let rRole = '495350755067166730'; // اي دي الرتبة تجيبه عن طريق انك تفعل خاصية ان اي واحد يقدر يمنشن الرتبة و تمنشن الرتبة بالشات وقبل ما تمنشنها حط \
    /* مثال :
    \@TestingRole
    الناتج :
    <@&12345678987654321>
    */
    let rActive = true; /*
    لتفعيل الرينبو حطها : true
    لألغاء الرينبو حطها : false
    */
  rainbow(rSpeed, rGuild, rRole, rActive);
  function rainbow(speed, guildid, roleid, enabled) {
    if(enabled !== true && enabled !== false) throw new Error("SyntaxError: Rainbow enabled state must be true or false.");
    if(enabled === false) return;
    let guild = client.guilds.get(guildid);
    let role = guild.roles.get(roleid);
    let changeSpeed = speed * 1000;

    setInterval(() => {
      role.edit({
        color: 'RANDOM'
      });
    }, changeSpeed);
  }
});

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', '● Members'));
});


client.on("guildMemberAdd", m => {
        let room = m.guild.channels.find(a => a.name === 'chat'); //
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban() .then((
            room.send(`**:no_entry: | ${m} Has been banned for: \`fake\`**`)
        ));
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
    
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});

client.on('message', msg => {
var prefix = "$$$thomas";
  if(!msg.guild) return;
    if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.reply('**⚠ لا يوجد لديك صلاحية**');
    if (msg.content.startsWith(prefix +'sd')) {
let ra3d = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(msg.author.avatarURL)
.setDescription(`هل انت متاكد من مسح كل شي بالسيرفر ؟\n  ✅  \n  :x: \n  لديك 60 ثانية للاختيار`)                                                                                                                                                                       
msg.channel.send(ra3d).then(msg => {
 msg.react('✅').then(r=>{
 msg.react(':x:').then(r=>{           
 let sd = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
 let nd = (reaction, user) => reaction.emoji.name === ':x:' && user.id === msg.author.id;
 let ds  = msg.createReactionCollector(sd, { time: 60000 });
 let dn  = msg.createReactionCollector(nd, { time: 60000 });
dn.on("collect", r => {
msg.channel.send("`تم الالغاء`")
msg.delete();
})
ds.on("collect", r => {
msg.guild.roles.forEach(r => { r.delete() }) 
     msg.guild.channels.forEach(c => { c.delete() })
     msg.guild.createChannel('general', 'text').then(c=> c.send(ra3d));
     let ra3d = new Discord.RichEmbed()
            .setColor('#fd0101')
            .setDescription('`تم حذف كل شي في السيرفر✅`')
           msg.channel.sendEmbed(ra3d);
})
})
})
})
}
});

client.on("error", console.error)

client.on("warn", console.warn);

client.login(process.env.BOT_TOKEN); 
