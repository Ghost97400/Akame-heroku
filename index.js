const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => { 
    console.log('Bot pret.');
});

client.on('message', (message) => {

    let args = message.content.split(" ");
    let command = args.shift().toLowerCase();

    if(!command.startsWith(prefix)) return;

    if(command ===  prefix +'salut') {
      message.channel.send('salut a toi!');
    }
});

client.on('guildMemberAdd', (member) => {
   // Lorsqu'un utilisateur rejoint.
   let welcomeChannel = client.channels.cache.get('820177099980668938');
   welcomeChannel.send('Bienvenue sur le serveur, ' + member.user.tag + ' !'); // tag == user#1234

   member.roles.add('819964606483136574');
});

client.on('guildMemberRemove', (member) => {
   // Lorsqu'un utilisateur quitte.
   let leaveChannel = client.channels.cache.get('820177099980668938');
   leaveChannel.send('A quitter le serveur, ' + member.user.tag + ' !')
});

client.login('ODQ3ODUxNDkxNTE5NjI3MzM0.YLEFOw.MFpfnDm9oVGYxl1nqeBiellRY0g');