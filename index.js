const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const Enmap = require ('enmap')
const embedColor = 0xE52B50;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
client.on('message', async message => {
  var guild = message.guild;
  var channel = message.channel;
  const prefix = '?'
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 client.points = new Enmap({ name: "points" }); //For ranking system
client.on("ready", ()=>console.log("READY"));  //log when the bot gets ready
const leveling = require("./ranking");         //load the leveling file
 
	const args = message.content.slice(prefix.length).trim().split(/ +/); 
	const command = args.shift().toLowerCase();

    client.user.setActivity("Order NOW | Made by ! AT Dropi#1661 \n Hey", {type: "WATCHING"});



if(command === 'embed'){
    //define saymsg
 const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setTitle("Order Music Bot")
	.setColor("#c219d8")
    .setDescription(saymsg)
    .setFooter("Bot made by ! AT Dropi#1661", client.user.displayAvatarURL())
    //delete the Command
    message.delete({timeout: 300});
    //send the Message
    message.channel.send(embed)}

if(command === 'serverinfo') {

const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s information`)
            .addField("Owner", `The owner of this server is ${message.guild.owner}`)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
            

        message.channel.send(embed)
		}
		
if (command === 'uptime'){
     
     {   var totalSeconds = (client.uptime / 1000);
        var days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        var hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = Math.floor(totalSeconds % 60);

        const embed = new Discord.MessageEmbed()
           .setTitle(`Uptime`)
           .addField("Days", `${days}`)
           .addField("Hours", `${hours}`)
           .addField("Minutes", `${minutes}`)
           .addField("Seconds", `${seconds}`);
       message.channel.send(embed);
    
}}
		
   if(command === 'ping')

 {  
const embed = new Discord.MessageEmbed()
    .setDescription(`✅ - Ping : **${client.ws.ping}ms** !`)
    message.channel.send(embed)
  } 
  
 

if (command === 'help') {
     
          message.channel.send({embed: {
       color: 3447003,
       title: '**__Help__**',
       description: '**Normal Commands**\n\n' + prefix + 'ping\n' + prefix + 'uptime\n' + prefix + 'embed\n'
           + prefix + 'serverinfo\n**Admin Commands**\n\n'
            + prefix + 'addrole\n' + prefix + 'delrole\n' + prefix + 'clear\n' + prefix + 'poll\n' + prefix + 'kick\n' + prefix + 'ban\n'
       
          }})};
      


   if (command === 'addrole') {
if ((message.member.hasPermission('ADMINISTRATOR')))   {

       var i = 0,
        len = args.length;

           for( ; i < len; i += 1 ){


   

     guild.roles.create({
     data: {
     name:  args[i],
     },
     
    });
 message.channel.send({embed: {
 color: 3066993,
 description: " Roles for " + args[i] + " created successfully" ,
 
 }});	
           }
 	
 } else {

message.channel.send({embed: {
 color: 15158332,
 description: "You don't have the rights to run these commands. You need Discord Administrator permission." ,
  }})}
}


 	
if (command === 'delrole' || command === 'resetrole') {
 if ((message.member.hasPermission('ADMINISTRATOR')))      {
         var i = 0,
        len = args.length;

           for( ; i < len; i += 1 ){



   var role = message.guild.roles.cache.find(role => role.name === args[i]);

   if (role === undefined) {console.log("Role not found:"  + args[i] )}
    else 
     role.delete('The role needed to go')
     .then(deleted => console.log(`Deleted role ${deleted.name}`))
     .catch(console.error);
 message.channel.send({embed: {
 color: 15158332,
 description: " Roles for " + args[i] + " deleted successfully" ,
 }});
 
           
           
          
}

 
 
 
 
} else {

message.channel.send({embed: {
 color: 15158332,
description: "You don't have the rights to run these commands. You need Discord Administrator permission." ,
  }})}
}


if (command === 'clear'){
if ((message.member.hasPermission('ADMINISTRATOR'))) {

const embed = new Discord.MessageEmbed()
channel.bulkDelete(parseInt(args[0])+1)
  .then(messages => console.log(`deleted ${messages.size} messages`))
  
  message.channel.send({embed: {
 color: 15158332,
description:  `Successfully deleted `  + args[0] +  ` messages`
,
  }})
  

  
  .catch(console.error);
} else {

message.channel.send({embed: {
 color: 15158332,
 description: "You don't have the rights to run these commands. You need Discord Administrator permission ." ,
  }})}



}

if(command === "poll"){

const embed = new Discord.MessageEmbed()
let msgArgs = args.join(' ')
if(!msgArgs) return message.channel.send("You need write something").then(message => message.delete({ timeout: 5000 }))
message.delete().catch()
message.channel.send({embed: {
 color: 15158332,
 description: msgArgs + "?"
}})
.then(messageReaction => {
messageReaction.react("✅")
messageReaction.react("❎")

})


if (command === 'kick'){
if ((message.member.hasPermission('ADMINISTRATOR'))) {
var member= message.mentions.members.first();
    member.kick().then((member) => {
           message.channel.send({embed: {
 color: 15158332,
 description:member.displayName + " has been successfully kicked "
           }})        
        
})
}

    } else {
    	
message.channel.send({embed: {
 color: 15158332,
 description: "You don't have the rights to run these commands. You need Discord Administrator permission ." ,
  }})}}

if (command === 'ban'){
if ((message.member.hasPermission('ADMINISTRATOR'))) {
var member= message.mentions.members.first();
    member.ban().then((member) => {
           message.channel.send({embed: {
 color: 15158332,
 description:member.displayName + " has been successfully banned "
           }})        
        
})


    } else {
    	
message.channel.send({embed: {
 color: 15158332,
 description: "You don't have the rights to run these commands. You need Discord Administrator permission ." ,
  }})}}


	










  
  
  


});
});

	


client.login('ODQ2MDY1ODQ5OTExNDc2MjY0.YKqGOQ.Ip_rxKxfrOO7ZqEllsOYSWqUE3c');