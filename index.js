const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION","USER", "embeds"]});





    
    


const db = require('quick.db')
const embedColor = 0xe52b50;

const dbs = require("discord-buttons");
dbs(client);
const { MessageMenuOption, MessageMenu } = require("discord-buttons")






  










client.on('ready', () => {

//footer of Bot
console.log(`Logged in as ${client.user.tag}!`);
// Bot logged in
	

	
	const express = require('express')
	const app = express();
	const port = 3000;
	app.get('/', (req, res) => res.send('Hello World!'));
	app.listen(port, () =>
		console.log(`Example app listening at http://localhost:${port}`)
		//creating Website
	);
	

	
})
	client.on('message', async message => {
   //||||||||||||||||||
  		
  	let pref = db.get(`prefix_${message.guild.id}`)
		let prefix;
        if(!pref){
          prefix = '='
      } else {
         prefix = pref;}
       //||||||||||||||||||
    let footer = 'VCL Bot'
     let foter = db.get(`footer_${message.guild.id}`)
		let f;
        if(!foter){
          f = 'VCL Bot'
      } else {
         f = foter;}
       //||||||||||||||||||
       let aut = db.get(`author_${message.guild.id}`)
		let auther;
        if(!aut){
          auther = `${message.guild.name}`
      } else {
         auther = aut;}
    //|||||||||||||||||||||
    let ur = db.get(`url_${message.guild.id}`)
		let url;
        if(!ur){
          url = `https://discord.gg/5quwmubv26`
      } else {
         url = ur;}
      //|||||||||||||||||||||
          let verifyr = db.get(`verifyrole_${message.guild.id}`)
		let verifyrole;
        if(!verifyr){
          verifyrole = `https://discord.gg/5quwmubv26`
      } else {
         verifyrole = verifyr;}
         //||||||||||||||||||
                   let verifych = db.get(`verifychannel_${message.guild.id}`)
		let verifychannel;
        if(!verifych){
          verifychannel = `https://discord.gg/5quwmubv26`
      } else {
         verifychannel = verifych;}

         
         

    

         const args = message.content
			.slice(prefix.length)
			.trim()
			.split(/ +/);
		const command = args.shift().toLowerCase();
		let membersCount = client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b, 0)
const messages = [` On ${client.guilds.cache.size} Servers`, `Type setprefix to change prefix`, `With ${membersCount} Members`]
let current = 1;






    
        client.user.setActivity(`Powered by VCL Coding`, {type: "PLAYING"})

        setInterval(() => {
            if(messages[current]){
            client.user.setActivity(messages[current] , {type: "PLAYING"})
            current++;
            }else{
            current = 0;
            client.user.setActivity(messages[current] , {type: "PLAYING"})
            }
    
        }, 10*1000)
    
		
		
 
        
				
				
				
				
				
				var guild = message.guild;
		var channel = message.channel;
		;
		
		
		
		
	if(command === 'say'){
	const saymsg = message.content.slice(Number(prefix.length) + 3);	
	message.channel.send(saymsg)	
		
		
	}

    if(message.content.startsWith('setup-prefix')){
                      if (message.member.hasPermission('ADMINISTRATOR')) {
          let data = db.get(`prefix_${message.guild.id}`)    
          
          let symbol = args.join(" ")
         if(!symbol) message.channel.send("Please input the Prefix")


          
         db.set(`prefix_${message.guild.id}`, symbol)
        return message.channel.send(`${symbol}`)
                      } else {
                const embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('NO PERMS')
                    .setDescription(
                        "You don't have the rights to run these commands. You need Discord Administrator permission."
                    )
                .setFooter(footer, message.guild.iconURL());
                message.channel.send(embed);
            }
    }	
        
   ///EMBED///////////////////////// ////////////////////////////////////////              
        if(message.content.startsWith(prefix + "setup-embed")){
        	
        const embed = new Discord.MessageEmbed()
        .setTitle('SETUP EMBED')
        .addField(prefix + 'setup-footer', 'Edit the Footer')
        .addField(prefix + 'setup-author', 'Edit the Author Text')
        .addField(prefix + 'setup-url', 'Edit the URL on Title')

        .addField(prefix + 'reset-embed', 'Reset Embed Settings')
        .setColor('GREEN')
        message.channel.send(embed)
        	
        }
        
        if(message.content.startsWith(prefix + "setup-footer")){
                      if (message.member.hasPermission('MANAGE_GUILD')) {
          let data = db.get(`footer_${message.guild.id}`)    
          
          let symbol = args.join(" ")
         if(!symbol) message.channel.send("Please input a Footer")


          
         db.set(`footer_${message.guild.id}`, symbol)
        return message.channel.send(`${symbol}`)
                      } else {
                const embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('NO PERMS')
                    .setDescription(
                        "You don't have the rights to run these commands. You need Discord Administrator permission."
                    )
                .setFooter(footer, message.guild.iconURL());
                message.channel.send(embed);
            }}
    
    
    if(message.content.startsWith(prefix + "setup-author")){
                      if (message.member.hasPermission('MANAGE_GUILD')) {
          let data = db.get(`author_${message.guild.id}`)    
          
          let symbol = args.join(" ")
         if(!symbol) message.channel.send("Please input a Author Msg")


          
         db.set(`author_${message.guild.id}`, symbol)
        return message.channel.send(`${symbol}`)
                      } else {
                const embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('NO PERMS')
                    .setDescription(
                        "You don't have the rights to run these commands. You need Discord Administrator permission."
                    )
                .setFooter(footer, message.guild.iconURL());
                message.channel.send(embed);
            }}
  
  
     if(message.content.startsWith(prefix + "setup-url")){
                      if (message.member.hasPermission('MANAGE_GUILD')) {
          let data = db.get(`url_${message.guild.id}`)    
          
          let symbol = args.join(" ")
         if(!symbol) message.channel.send("Please input a url ")


          
         db.set(`url_${message.guild.id}`, symbol)
        return message.channel.send(`${symbol}`)
                      } else {
                const embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('NO PERMS')
                    .setDescription(
                        "You don't have the rights to run these commands. You need Discord Administrator permission."
                    )
                .setFooter(footer, message.guild.iconURL());
                message.channel.send(embed);
            }}
 
  
  
            
     if(message.content.startsWith(prefix + "reset-embed")){
     	db.delete(`author_${message.guild.id}`)
     	db.delete(`footer_${message.guild.id}`)
        db.delete(`url_${message.guild.id}`)
     	message.channel.send('Successfully')
     }
     
     
        
            
       
    
    
    
if(message.content.startsWith(prefix + 'setup-mlog')){    
    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")
    if (!args[0]) {
      let b = await db.fetch(`modlog_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**Modlog Channel Set In This Server Is \`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**Please Enter A Channel Name or ID To Set!**"
        );
    }
        let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**Please Enter A Valid Text Channel!**");

        try {
            let a = await db.fetch(`modlog_${message.guild.id}`)

            if (channel.id === a) {
                return message.channel.send("**This Channel is Already Set As Modlog Channel!**")
            } else {
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Modlog Channel Set!**")
                db.set(`modlog_${message.guild.id}`, channel.id)

                message.channel.send(`**Modlog Channel Has Been Set Successfully in \`${channel.name}\`!**`)
            }
        } catch {
            return message.channel.send("**Error - `Missing Permissions Or Channel Is Not A Text Channel!`**")
            
        }
}





//|||||||||||Verify


if(message.content == (prefix + 'setup-verify')){
	
const embed = new Discord.MessageEmbed()	
.setTitle('SETUP VERIFY')
.addField(prefix + 'setup-verifyrole', 'Setup the Verify Role')
.addField(prefix + 'setup-verifychannel', 'Setup the Verify Channel')
.setColor('GREEN')
message.channel.send(embed)

}



     if(message.content.startsWith(prefix + "setup-verifyrole")){
                      if (message.member.hasPermission('MANAGE_GUILD')) {
          let data = db.get(`verifyrole_${message.guild.id}`)    
          
          let symbol = args.join(" ")
         if(!symbol) message.channel.send("Please input a Verify Role as ID")


          
         db.set(`verifyrole_${message.guild.id}`, symbol)
        return message.channel.send(`${symbol}`)
                      } else {
                const embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('NO PERMS')
                    .setDescription(
                        "You don't have the rights to run these commands. You need Discord Administrator permission."
                    )
                .setFooter(footer, message.guild.iconURL());
                message.channel.send(embed);
            }}



     if(message.content.startsWith(prefix + "setup-verifychannel")){
                      if (message.member.hasPermission('MANAGE_GUILD')) {
          let data = db.get(`verifychannel_${message.guild.id}`)    
          
          let symbol = args.join(" ")
         if(!symbol) message.channel.send("Please input a Verify Channel as ID")


          
         db.set(`verifychannel_${message.guild.id}`, symbol)
        return message.channel.send(`${symbol}`)
                      } else {
                const embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('NO PERMS')
                    .setDescription(
                        "You don't have the rights to run these commands. You need Discord Administrator permission."
                    )
                .setFooter(footer, message.guild.iconURL());
                message.channel.send(embed);
            }}


const Captcha = require("@haileybot/captcha-generator");
if(message.content.startsWith(prefix + 'verify')){
const { MessageAttachment, MessageEmbed } = require('discord.js')
const channel = message.guild.channels.cache.get(verifych);
        if (!channel || message.channel.id !== channel.id) return message.channel.send('Channel isnt setuped in this Channel');
        const role = message.guild.roles.cache.get(verifyr);
        const authorUser = message.guild.members.cache.get(message.author.id);
        if (!role) return message.channel.send('Role isnt setuped for this guild');
        if (authorUser.roles.cache.some(r => r.id === role.id)) {
            let embed = new MessageEmbed()
                .setColor("#ff000")
                .setDescription("Verification failed! You have already been verified!");
            return message.channel.send(embed);
        }
        const captcha = new Captcha();

        const attachmentFile = new MessageAttachment(captcha.PNGStream, "captcha.png");

        let embed = new MessageEmbed()
            .setColor("#f6ff00")
            .setDescription("Enter the text below to complete the verification process")
            .attachFiles(attachmentFile)
            .setImage("attachment://captcha.png");

        const dmc = await message.author.createDM();
        await dmc.send(embed)
            .then(async () => {
                const embed = new MessageEmbed()
                    .setColor("#1ef000")
                    .setDescription("Verification code sent! Please check your DM");
                channel.send(embed);
                const filter = m => m.author.id === message.author.id;

                const collector = await dmc.createMessageCollector(filter);

                collector.on("collect", async function (m) {
                    setTimeout(async () => {
                        await message.author.deleteDM();
                    }, 5000);
                    if (m.content.toUpperCase() == captcha.value) {
                        let embed = new MessageEmbed()
                            .setColor("#ffff00")
                            .setDescription("🎉 Verification completed! You are now having access to the server");
                        await dmc.send(embed);
                        return authorUser.roles.add(role, "Verified");
                    } else if (m.content.toUpperCase() != captcha.value) {
                        let embed = new MessageEmbed()
                            .setColor("#ff0000")
                            .setDescription("🎉 Verification failed! Please get another code and try again!");
                        return dmc.send(embed);
                    }
                });
            })
            .catch(() => {
                const embederr = new MessageEmbed()
                    .setColor("#ff0000")
                    .setDescription("An error occurred while sending captcha! Make sure you have DM enabled in the server's security settings");
                return channel.send(embederr);
            });
	
	
	
}




    
        
    
		
		
 
        
				
				
				
				
				

		
		
		
		
		
		
		
		
		
		
		

	


           if (message.content == prefix + "help") {

        
        let embed4 = new Discord.MessageEmbed()
    	.setTitle('Setup')
    	.setDescription('**setup-prefix** *new Prefix*\nSet Bot Prefix\n\n**' + prefix + 'setup-mlog** *#Channel*\nSet the mod log channel\n\n**'+ prefix + 'setup-embed**\nSetup the Embed\n\n**' + prefix + 'setup-verify** \nSetup the Verify Command')
    	 .setFooter(footer, client.user.displayAvatarURL());
    	let embed3 = new Discord.MessageEmbed()
    	.setTitle('Fun')
    	.setDescription('**' + prefix +
                        'coinflip**\n Shows a site of a coin\n\n**' +
                        prefix +
                        'answer** *Question*\nShows a random answer\n\n**' +
                        prefix +
                        'dice** *Number*\nShows a random number from 1-6\n\n**' +
                        prefix +
                        'cat/dog/fish**\n Shows a little embed about the text\n\n**' +
                        prefix +
                        'gayrate** *User*\nShows a random gayrate for the user\n\n**' + prefix + 'ttt** *User*\n Play tic tac toe with a friend\n\n**' +
                        prefix +
                        'iq** *User*\nShows a random iq for the user\n')
    	.setFooter(footer, client.user.displayAvatarURL());
    
    	 let embed2 = new Discord.MessageEmbed()
    	.setTitle('Admin')
    	.setDescription('**' + prefix + 'addrole** *Name*\n Adds a role to your Server\n\n**' + prefix + 'removerole** *Name*\nDelets a role of your Server\n\n**' + prefix + 'kick** *@User*\nKicks a User of your Server\n\n**' + prefix + 'ban/unban** *@User* \nBans a User of your Server\n\n**' + prefix + 'clear** *amount*\nDelets an amount of messages\n\n**' + prefix +  'poll** *Text*\nAsk a question in an embed and with reactions\n\n**' + prefix + 'nick** *new Name*\nChange Nickname of one Person\n\n**' + prefix + 'dm** *User* Dm a user')
    	.setFooter(footer, client.user.displayAvatarURL());
    	 let embed1 = new Discord.MessageEmbed()
    	.setTitle('General')
    	.setDescription('**' + prefix + 'about**\n Shows you who is the Dev.\n\n**'  + prefix + 'weather** *Location*\nShows the wheater of a Location\n\n**' + prefix + 'botinfo**\n Shows some facts about the Bot\n\n**' + prefix + 'serverinfo**\n Shows some facts about the Server\n\n**' + prefix + 'say <Msg>**\nSends a message\n\n**' + prefix + 'embed** *Title ++ Desc*\nSends an embed')
    	.setFooter(footer, client.user.displayAvatarURL());
        let option1 = new MessageMenuOption()
        .setLabel("General")
        .setValue("Option 1")
        .setDescription("This will send you the General Commands")
        .setDefault()
        .setEmoji("🚫")
        
        let option2 = new MessageMenuOption()
            .setLabel("Admin")
            .setValue("Option 2")
            .setDescription("This will give you the Admin Command")
            .setDefault()
            .setEmoji("😄")
        let option3 = new MessageMenuOption()
            .setLabel("Fun")
            .setValue("Option 3")
            .setDescription("This will give you the Fun Commands")
            .setDefault()
            .setEmoji("😏")
        let option4 = new MessageMenuOption()
            .setLabel("Setup")
            .setValue("Option 4")
            .setDescription("This will give you the Setup Commands")
            .setDefault()
            .setEmoji("🔲")

        let selection = new MessageMenu()
            .setID("Selection")
            .setMaxValues(1)
            .setMinValues(1)
            .setPlaceholder("Click me to make a Selection!")
            .addOption(option1)
            .addOption(option2)
            .addOption(option3)
            .addOption(option4)
          
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM").setTitle("HELP MENU")

        let menumsg = await message.channel.send(embed, selection)

        function menuselection(menu) {
            switch(menu.values[0]) {
                case "Option 1": 
                    menu.reply.send(embed1, true)
                break;
                case "Option 2": 
                    menu.reply.send(embed2, true)
                break;
                case "Option 3": 
                    menu.reply.send(embed3, true)
                break;
                case "Option 4": 
                    menu.reply.send(embed4, true)
                break;

            }
        }

        client.on("clickMenu", (menu) => {
            if(menu.message.id == menumsg.id) {
                if(menu.clicker.user.id == message.author.id) menuselection(menu)
                else menu.reply.send(":x: you are not allowed to pick something", true)
            }
        })
   
   const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Help Cmd__**')
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)			
   
   
    }

	 
	if(message.content == prefix + 'prefix'){
		message.channel.send(prefix)
	}


  



            

            
          	const weather = require('weather-js')
            
            if (message.content.startsWith(prefix + 'weather')) {
         weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
               if(err) message.channel.send(err)


           if(result.length === 0) {
            const embed = new Discord.MessageEmbed()
            .setTitle("**Please enter a valid location**")
            message.channel.send(embed)
        }

        var current = result[0].current 
        var location = result[0].location 

        let embed = new Discord.MessageEmbed()
           .setDescription(`**${current.skytext}**`) 
           .setAuthor(`Weather for ${current.observationpoint}`) 
           .setThumbnail(current.imageUrl) 
           .setColor("RANDOM") 
           .addField("**Timezone**", `UTC${location.timezone}`, true) 
           .addField("**Degree Type**", location.degreetype, true) 
           .addField("**Temperature**", `${current.temperature}`, true)
           .addField("**Feels like**", `${current.feelslike} Degrees`, true)
           .addField("**Winds**", current.winddisplay, true)
           .addField("**Humidity**", ` ${current.humidity}%`, true)
           .addField("**Day**", `${current.day}`, true)
           .addField("**Date**", `${current.date}`, true)
           
           message.channel.send(embed)

         	
         	
         	
         	
         const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Wheater Cmd__**')
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)			
         	
         	
         	
         	
         	
         })}

            	if(message.content == prefix + 'serverinfo'){
		
	let servericon = message.guild.iconURL;
let serverembed = new Discord.MessageEmbed()
.setTitle("Server Information")
.setColor("RANDOM")
.setThumbnail(servericon)
.addField("Server Name", message.guild.name)
.addField("Owner",`${message.guild.owner}`)
.addField("Channels", message.guild.channels.cache.size, true)
.addField("Roles", message.guild.roles.cache.size, true)
.addField("Created On", message.guild.createdAt)
.addField("You Joined", message.member.joinedAt)
.addField("Total Members", message.guild.memberCount)
.setThumbnail(message.guild.iconURL())
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL);
message.channel.send(serverembed);

       const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Serverinfo Cmd__**')
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)		
	}	
		
		
		
		
		const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")



 if(message.content == prefix + 'botinfo'){

  //command
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const botinfo = new Discord.MessageEmbed()
          .setAuthor(client.user.username)
          .setTitle("__**Stats:**__")
          .setColor("RANDOM")
          .addField("⏳ Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
          .addField("⌚️ Uptime ", `${duration}`, true)
          .addField("📁 Users", `${client.users.cache.size}`, true)
          .addField("📁 Servers", `${client.guilds.cache.size}`, true)
          .addField("📁 Channels ", `${client.channels.cache.size}`, true)
          .addField("👾 Discord.js", `v${version}`, true)
          .addField("🤖 Node", `${process.version}`, true)
          .addField("🤖 CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
          .addField("🤖 CPU usage", `\`${percent.toFixed(2)}%\``, true)
          .addField("🤖 Arch", `\`${os.arch()}\``, true)
          .addField("💻 Platform", `\`\`${os.platform()}\`\``, true)
          .addField("API Latency", `${(client.ws.ping)}ms`)  
      message.channel.send(botinfo)
  });
	
 const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Botinfo Cmd__**')
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)			
 	
 }
  

		
	

	
	
		     

            
            
            
            
            
            
           
			if (message.content == prefix + 'about') {
			//define saymsg
			const saymsg = message.content.slice(Number(prefix.length) + 5);
			//define embed
			const embed = new Discord.MessageEmbed()
				.setTitle('Admin Bot')
				.setColor('#c219d8')
				.setDescription(
					'Bot made by ```! Dropi#1661```\n\n [Server Invite](https://discord.gg/5rtGVWxycP)'
				)
				.setFooter('Version 1.0', client.user.displayAvatarURL());
			//delete the Command
			message.delete({ timeout: 300 });
			//send the Message
			message.channel.send(embed);
		
				
				
				
				
			const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__About Cmd__**')
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)			
				
				
				
				
			}

 



	


		  let rest_of_the_string = message.content.slice(prefix.length + 'embed'.length); //removes the first part
        if(message.content.startsWith(prefix + 'embed')){

        let array_of_arguments = rest_of_the_string.split('++'); //[title, description, link, image]
    
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, 'https://discord.gg/kpDnJCd3We')
        .setURL('https://discord.gg/kpDnJCd3We')
        .setTitle(array_of_arguments[0]) 

        .setDescription(array_of_arguments.slice(1).join(" "))
        .setColor('PURPLE')
        
        .setThumbnail(message.guild.iconURL())
        .setFooter('Requested by ' + message.author.username,  client.user.displayAvatarURL());

        
         
        message.channel.send(embed)

        	
        	
        	
        	
        const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Embed Cmd__**')
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)			
        	
        	
        	
        	
        	
        }
          
        if(message.content.startsWith(prefix + 'nick')){
              if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**You Dont Have Permissions To Change Nickname! - [MANAGE_GUILD]**");

        if (!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send("**I Dont Have Permissions To Change Nickname! - [CHANGE_NICKNAME]**");
      
        if (!args[0]) return message.channel.send("**Please Enter A User!**")
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        if (!member) return message.channel.send("**Please Enter A Username!**");

        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Cannot Set or Change Nickname Of This User!**')

        if (!args[1]) return message.channel.send("**Please Enter A Nickname**");

        let nick = args.slice(1).join(' ');

        
        member.setNickname(nick)
        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**Changed Nickname of ${member.displayName} to ${nick}**`)
        message.channel.srend(embed)
        

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const sembed = new Discord.MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("#ff0000")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .setDescription('**__Nick Cmd__**')
            
            .addField("**Nick Changed Of**", member.user.username)
            .addField("**Nick Changed By**", message.author.username)
            .addField("**Nick Changed To**", args[1])
            .addField("**Date**", message.createdAt.toLocaleString())
            .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(sembed) 
            
            }

		if (message.content.startsWith(prefix + 'addrole')) {
			if (message.member.hasPermission('MANAGE_ROLES')) {
				var i = 0,
					len = args.length;

				for (; i < len; i += 1) {
					guild.roles.create({
						data: {
							name: args[i]
						}
					});
					message.channel.send({
						embed: {
							color: 'GREEN',
							description: ' Roles for ' + args[i] + ' created successfully'
						}
					});
				}
			} else {
				const embed = new Discord.MessageEmbed()
					.setColor('RED')
					.setTitle('NO PERMS')
					.setDescription(
"**You Dont Have Permissions To Change Nickname! - [MANAGE_ROLES]**")
					.setFooter(footer, message.guild.iconURL());
				message.channel.send(embed);
			}
		
		
		
		
		
		const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Addrole Cmd__**')
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
      
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)	
		}

		if (message.content.startsWith(prefix + 'delrole') || command === 'resetrole') {
			if (message.member.hasPermission('MANAGE_ROLES')) {
				var i = 0,
					len = args.length;

				for (; i < len; i += 1) {
					var role = message.guild.roles.cache.find(
						role => role.name === args[i]
					);

					if (role === undefined) {
						console.log('Role not found:' + args[i]);
					} else
						role
							.delete('The role needed to go')
							.then(deleted => console.log(`Deleted role ${deleted.name}`))
							.catch(console.error);
					message.channel.send({
						embed: {
							color: 'GREEN',
							description: ' Roles for ' + args[i] + ' deleted successfully'
						}
					});
				}
			} else {
				const embed = new Discord.MessageEmbed()
					.setColor('RED')
					.setTitle('NO PERMS')
					.setDescription("**You Dont Have Permissions To Change Nickname! - [MANAGE_ROLES]**")

					.setFooter(footer, client.user.displayAvatarURL());
				message.channel.send(embed);
			}
	
	
	const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Delrole Cmd__**')
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)	
       	
	
		}
	    
		
		
		
		
	
    
		if (message.content.startsWith(prefix + 'clear')) {
			if (message.member.hasPermission('MANAGE_MESSAGES')) {
				const embed = new Discord.MessageEmbed();
				channel
					.bulkDelete(parseInt(args[0]) + 1)
					.then(messages => console.log(`deleted ${messages.size} messages`));

				message.channel
					.send({
						embed: {
							color: 'GREEN',
							description: `Successfully deleted ` + args[0] + ` messages`
						}
					})

					.catch(console.error);
			} else {
				const embed = new Discord.MessageEmbed()
					.setColor('RED')
					.setTitle('NO PERMS')
					.setDescription(
						"You don't have the rights to run these commands. You need Discord Administrator permission."
					)
					.setFooter(footer, client.user.displayAvatarURL());
				message.channel.send(embed);
			}
		
		
		
		
		
		
		const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__ Clear Cmd__**')
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
       .addField('Cleared amount', args[0])
       .setTimestamp();
       
       
            let vchannel = db.fetch(`modlog_${message.guild.id}`)
            if (vchannel == null) return;

            if (!vchannel) return;

       
       var sChannel = message.guild.channels.cache.get(vchannel)
            if (!sChannel) return;
            sChannel.send(lembed)		
		
		
			
			
			
		}

		if (message.content.startsWith(prefix + 'poll')) {
			let msgArgs = args.join(' ');

			const embed = new Discord.MessageEmbed()
 
				.setTitle('NEW Poll')
				.setColor('PURPLE')
				.setThumbnail(message.guild.iconURL())
				.setDescription(msgArgs)
			
				.setFooter(
					'Poll by ' + message.author.username,
					message.guild.iconURL()
				);
			message.channel
				.send(embed)

				.then(messageReaction => {
					messageReaction.react('✅');
					messageReaction.react('❎');
				});
		
			
		const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Poll Cmd__**')
       .addField('**Poll Text**', msgArgs)
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
     
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)			
			
			
		}

		if (message.content.startsWith(prefix + 'kick')) {
			
			
			
			if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You Do Not Have Permissions To Kick Members! - [KICK_MEMBERS]**");
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("**I Do Not Have Permissions To Kick Members! - [KICK_MEMBERS]**");

            if (!args[0]) return message.channel.send('**Enter A User To Kick!**')

            var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!kickMember) return message.channel.send("**User Is Not In The Guild!**");

            if (kickMember.id === message.member.id) return message.channel.send("**You Cannot Kick Yourself!**")

            if (!kickMember.kickable) return message.channel.send("**Cannot Kick This User!**")
            if (kickMember.user.bot) return message.channel.send("**Cannot Kick A Bot!**")

            var reason = args.slice(1).join(" ");
            try {
                const sembed2 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription(`**You Have Been Kicked From ${message.guild.name} for - ${reason || "No Reason!"}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                kickMember.send(sembed2).then(() =>
                    kickMember.kick()).catch(() => null)
            } catch {
                kickMember.kick()
            }
            if (reason) {
            var sembed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${kickMember.user.username}** has been kicked for ${reason}`)
            message.channel.send(sembed);
            } else {
                var sembed2 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${kickMember.user.username}** has been kicked`)
            message.channel.send(sembed2);
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(kickMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**__Kick Cmd__**")
                .addField("**User Kicked**", kickMember.user.username)
                .addField("**Kicked By**", message.author.username)
                .addField("**Reason**", `${reason || "**No Reason**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)

		}
		
		
		
		
		
		if(message.content.startsWith(prefix + 'dm')){
        if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES")) return;


      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `You did not mention a user, or you gave an invalid id`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("You did not specify your message");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("That user could not be DMed!"))
        .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
		
		}
		
		
		
		
		
		
		

	    if(message.content == prefix + 'ban'){
	    	
	    	
	    try {
            if (!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send("**You Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!args[0]) return message.channel.send("**Please Provide A User To Ban!**")

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("**User Is Not In The Guild**");
            if (banMember === message.member) return message.channel.send("**You Cannot Ban Yourself**")

            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("**Cant Kick That User**")
            try {
            message.guild.members.ban(banMember)
            banMember.send(`**Hello, You Have Been Banned From ${message.guild.name} for - ${reason || "No Reason"}**`).catch(() => null)
            } catch {
                message.guild.members.ban(banMember)
            }
            if (reason) {
            var sembed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${banMember.user.username}** has been banned for ${reason}`)
            message.channel.send(sembed)
            } else {
                var sembed2 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${banMember.user.username}** has been banned`)
            message.channel.send(sembed2)
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(banMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .setDescription("**__Ban Cmd__**")
                .addField("**Banned**", banMember.user.username)
                .addField("**ID**", `${banMember.id}`)
                .addField("**Banned By**", message.author.username)
                .addField("**Reason**", `${reason || "**No Reason**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch (e) {
            return message.channel.send(`**${e.message}**`)	
	    	
	    	
        }	
	    	
	    }
		
		if(message.content.startsWith(prefix + 'unban')){
		if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Dont Have The Permissions To Unban Someone! - [BAN_MEMBERS]**")

        if (!args[0]) return message.channel.send("**Please Enter A Name!**")
      
        let bannedMemberInfo = await message.guild.fetchBans()

        let bannedMember;
        bannedMember = bannedMemberInfo.find(b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || bannedMemberInfo.get(args[0]) || bannedMemberInfo.find(bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase());
        if (!bannedMember) return message.channel.send("**Please Provide A Valid Username, Tag Or ID Or The User Is Not Banned!**")

        let reason = args.slice(1).join(" ")

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Don't Have Permissions To Unban Someone! - [BAN_MEMBERS]**")
        try {
            if (reason) {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`**${bannedMember.user.tag} has been unbanned for ${reason}**`)
                message.channel.send(sembed)
            } else {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed2 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`**${bannedMember.user.tag} has been unbanned**`)
                message.channel.send(sembed2)
            }
        } catch {
            
        }

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        let embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(bannedMember.user.displayAvatarURL({ dynamic: true }))
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setDescription('**__Unban Cmd__**')
            .addField("**Unbanned**", `${bannedMember.user.username}`)
            .addField("**ID**", `${bannedMember.user.id}`)
            .addField("**Moderator**", message.author.username)
            .addField("**Reason**", `${reason}` || "**No Reason**")
            .addField("**Date**", message.createdAt.toLocaleString())
            .setFooter(message.guild.name, message.guild.iconURL())
            .setTimestamp();

        var sChannel = message.guild.channels.cache.get(channel)
        if (!sChannel) return;
        sChannel.send(embed)
	}
		
		
		
		
		
		
		  

		  	
		  	
		  	
		
    
  	
		  	
		  	
		  	
		  	
		  
		
		
					
				
		
		
           		if (message.content.startsWith(prefix + 'coinflip')) {
			function doRandHT() {
				var rand = ['HEADS!', 'TAILS!'];

				return rand[Math.floor(Math.random() * rand.length)];
			}

			const embed = {
				title: `Here is the winner!`,
				description: doRandHT(),
				color: 7584788
			};
			message.channel.send({ embed });
	
	
	const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Coinflip Cmd__**')
       .addField('**Poll Text**', msgArgs)
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
     
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)			
	
	
	
	
		}

		//||||||||||||||||||||||||||||||||Dice|||||||
		           		if (message.content.startsWith(prefix + 'dice')) {
			function doRandHT() {
				var rand = ['1', '2', '3', '4', '5', '6'];

				return rand[Math.floor(Math.random() * rand.length)];
			}

			const embed = {
				title: `Here is the winner!`,
				description: doRandHT(),
				color: 7584788
			};
			message.channel.send({ embed });
		
			
		const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Dice Cmd__**')
       .addField('**Poll Text**', msgArgs)
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
     
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)				
			
			
			
			
		}

		//|||||||||||||||||||||||||||||||8Ball||||||

		           		if (message.content.startsWith(prefix + 'answer')) {
			
			
			function doRandHT() {
				var rand = [
					'Yes!',
					'No!',
					'Probably',
					'I do not know',
					'Ask your mother',
					'This question is dificilt',
					'in any case!',
					'Ask again'
				];

				return rand[Math.floor(Math.random() * rand.length)];
			}

			const embed = {
				title: `Here is your answer!`,
				description: doRandHT(),
				color: 7584788
			};
			message.channel.send({ embed });
	
	const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Answer Cmd__**')
       .addField('**Poll Text**', msgArgs)
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
     
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)			
	
	
	
		}

		//////////////////////////////Animals///////

		if (command === 'cat'){
			message.channel.send({
				embed: {
					title: 'Cat',
					description: 'Meow, do you love cats🐱❤️?'
				}
			});}

		if (command === 'dog'){
			message.channel.send({
				embed: {
					title: 'Dog',
					description: 'Wuff wuff, do you love dogs 🐶?'
				}
			});}

		if (command === 'fish'){
			message.channel.send({
				embed: {
					title: 'Fish',
					description: 'Blub Blub, do you like fishys 🐠'
				}
			});
}
	
	      if(command === 'mute'){}
	      
	      
	
		if (message.content == prefix + 'iq') {
			function doRandHT() {
				var rand = [
					'0',
					'21 uffffffffff',
					'35',
					'60',
					'76',
					'96',
					'114',
					'115',
					'116',
					'134',
					'135',
					'136',
					'144',
					'145',
					'176',
					'180 wooooooooooow'
				];
				return rand[Math.floor(Math.random() * rand.length)];
			}

			const embed = new Discord.MessageEmbed()

				.setTitle('Here is your IQ!')
				.setDescription(doRandHT());

			message.channel.send(embed);
	
	
	const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Iq Cmd__**')
       .addField('**Poll Text**', msgArgs)
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
     
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)			
	
	
	
	
	
		}

		if (message.content == prefix + 'gayrate') {
			function doRandHT() {
				var rand = [
					'0%',
					'1%',
					'88%',
					'57%',
					'93% haha',
					'42%',
					'32%',
					'71%',
					'29%'
				];
				return rand[Math.floor(Math.random() * rand.length)];
			}

			const embed = new Discord.MessageEmbed()
				.setTitle('Here is you Gayrate!')
				.setDescription('YOU are to ' + doRandHT() + ' gay');
			message.channel.send(embed);
		
		const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__Gayrate Cmd__**')
       .addField('**Poll Text**', msgArgs)
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
     
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)				
			
			
			
		}















const midDuel = new Set()
const author = message.author.id
        const authorName = message.author.username
        var member = message.mentions.members.first()
        const memberName = member.user.username
        
        if(message.content.startsWith(prefix + 'ttt')){
        if (!member) {
            return message.channel.send('Incorrect Syntax! Please mention a user!')
        }
        if (member.id === author) {
            return message.channel.send('Incorrext Syntax! You cannot duel yourself!')
        }
        if (midDuel.has(author)) {
            return message.channel.send(`You're currently in a duel!`)
        } else if (midDuel.has(member.id)) {
            return message.channel.send(`<@${member.id}> is currently in a duel!`)
        }
        if (member.id === message.client.user.id) {
            return message.channel.send("You can't duel me lol!")
        }
        midDuel.add(author)
        midDuel.add(member.id)
        let turnName
        let a1 = '⬜'
        let a2 = '⬜'
        let a3 = '⬜'
        let b1 = '⬜'
        let b2 = '⬜'
        let b3 = '⬜'
        let c1 = '⬜'
        let c2 = '⬜'
        let c3 = '⬜'
        let xCircle
        let winner
        let turn
        const Embed = new Discord.MessageEmbed()
            .setTitle('Tic Tac Toe')
            .setDescription(`🎮 **${authorName}** VS ${memberName} 🎮\n\n🟦🟦🟦🟦🟦\n🟦${a1}${a2}${a3}🟦\n🟦${b1}${b2}${b3}🟦\n🟦${c1}${c2}${c3}🟦\n🟦🟦🟦🟦🟦`)
            .setFooter('You have 30 seconds to reply with your next move!\nYou may type "cancel" at any time to stop the game.\n(**1,2,3,4,5,6,7,8,9**)')
            .setColor(3426654)
        message.channel.send(`<@${author}>`, Embed).then(async message => {
            for (i = 0; i < 9; i++) {
                if (i % 2 == 0) {
                    turnName = author
                    xCircle = '❌'
                    winner = `<@${author}>`
                } else if (i % 2 > 0) {
                    turnName = member.id
                    xCircle = '🔴'
                    winner = `<@${member.id}>`
                }
                const filter = m => m.author.id === turnName
                try {
                    msg = await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: '60000',
                        errors: ['time']
                    })
                    if (msg.first().content.toLowerCase().trim() === 'cancel') {
                        message.channel.send('Cancelled!')
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                        break
                    } else {
                        if (msg.first().content.toLowerCase().trim() === '1') {
                            if (a1 == '🔴' || a1 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                a1 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === '2') {
                            if (a2 == '🔴' || a2 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                a2 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === '3') {
                            if (a3 == '🔴' || a3 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                a3 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === '4') {
                            if (b1 == '🔴' || b1 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                b1 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === '5') {
                            if (b2 == '🔴' || b2 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                b2 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === '6') {
                            if (b3 == '🔴' || b3 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                b3 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === '7') {
                            if (c1 == '🔴' || c1 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                c1 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === '8') {
                            if (c2 == '🔴' || c2 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                c2 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === '9') {
                            if (c3 == '🔴' || c3 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                c3 = xCircle
                            }
                        } else {
                            message.channel.send('Incorrect input, you lost.')
                            midDuel.delete(author)
                                midDuel.delete(member.id)
                            break
                        }
                    }
                    msg.first().delete()
                } catch (ex) {
                    message.channel.send(`<@${turnName}> You took too long to respond, and now you lost. Nice!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                }
                if (i % 2 == 0) {
                const updatedEmbed = new Discord.MessageEmbed()
                    .setTitle('Tic Tac Toe')
                    .setDescription(`🎮 ${authorName} VS **${memberName}** 🎮\n\n🟦🟦🟦🟦🟦\n🟦${a1}${a2}${a3}🟦\n🟦${b1}${b2}${b3}🟦\n🟦${c1}${c2}${c3}🟦\n🟦🟦🟦🟦🟦`)
                    .setFooter('You have 30 seconds to reply with your next move!\nYou may type "cancel" at any time to stop the game.\n(**1,2,3,4,5,6,7,8,9**)')
                    .setColor(3426654)
                message.edit(updatedEmbed)
                } else if (i % 2 > 0) {
                    const updatedEmbed = new Discord.MessageEmbed()
                    .setTitle('Tic Tac Toe')
                    .setDescription(`🎮 **${authorName}** VS ${memberName} 🎮\n\n🟦🟦🟦🟦🟦\n🟦${a1}${a2}${a3}🟦\n🟦${b1}${b2}${b3}🟦\n🟦${c1}${c2}${c3}🟦\n🟦🟦🟦🟦🟦`)
                    .setFooter('You have 30 seconds to reply with your next move!\nYou may type "cancel" at any time to stop the game.\n(**1,2,3,4,5,6,7,8,9**)')
                    .setColor(3426654)
                message.edit(updatedEmbed)
                }
                if (a1 == '❌' && b1 == '❌' && c1 == '❌' || a1 == '🔴' && b1 == '🔴' && c1 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (a2 == '❌' && b2 == '❌' && c2 == '❌' || a2 == '🔴' && b2 == '🔴' && c2 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (a3 == '❌' && b3 == '❌' && c3 == '❌' || a3 == '🔴' && b3 == '🔴' && c3 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (a1 == '❌' && a2 == '❌' && a3 == '❌' || a1 == '🔴' && a2 == '🔴' && a3 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (b1 == '❌' && b2 == '❌' && b3 == '❌' || b1 == '🔴' && b2 == '🔴' && b3 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (c1 == '❌' && c2 == '❌' && c3 == '❌' || c1 == '🔴' && c2 == '🔴' && c3 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (a1 == '❌' && b2 == '❌' && c3 == '❌' || a1 == '🔴' && b2 == '🔴' && c3 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (a3 == '❌' && b2 == '❌' && c1 == '❌' || a3 == '🔴' && b2 == '🔴' && c1 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (i == 8) {
                    message.channel.send("It's a tie!")
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                }
            }
        })
       
       
		const lembed = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
       .setColor("#ff0000")
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .setFooter(message.guild.name, message.guild.iconURL())
    
       .setDescription('**__TTT Cmd__**')
       
       .addField("**Used By**", message.author.username)
       .addField("**Date**", message.createdAt.toLocaleString())
     
       .setTimestamp();
       
       
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

       
       var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(lembed)				
       
       
        }

	

if(command === 'giveaway'){
   let time_length = ""
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('"**I Don\'t Have Permissions To Unban Someone! - [ADMINISTRATOR]**"');
        if (!message.content.split(' ')[1]) return message.channel.send('Please follow the format. example :' + prefix + 'giveaway <Time> <ChannelID>  <Prize>');
        const prize = message.content.split(' ').slice(3).join(' ');
        let channel = message.content.split(' ')[2]
        const started_time_duration_start = message.content.split(' ')[1]
        if (started_time_duration_start.toLowerCase().includes("h")){
            started_time_duration = started_time_duration_start.split("h")[0]
            time_duration = started_time_duration * 3600000
            if (time_duration == 3600000){time_length = "hour"}
            if (time_duration > 7200000){time_length = "hours"}
        }
        if (started_time_duration_start.toLowerCase().includes("m")){
            started_time_duration = started_time_duration_start.split('m')[0]
            time_duration = started_time_duration * 60000
            if (time_duration < 3600000){time_length = "minutes"}
            if (time_duration == 60000){time_length = "minute"}
        }
        if (isNaN(started_time_duration)) return message.channel.send('The duration time has to be a number.');
        if (started_time_duration < 1) return message.channel.send('Please provide a valid Time [m/h]');
        if (!message.guild.channels.cache.find(channels => channels.id === `${channel}`)) return message.channel.send("Please enter a valid id of the channel you want the giveaway to be sent.")
        if (prize === '') return message.channel.send('Please provide a prize');
        const embed = new Discord.MessageEmbed()
          .setTitle(`${prize}`)
          .setColor('#21b1e3')
          .setDescription(`React with 🎉 to enter!\nTime duration: **${started_time_duration}** ${time_length}\n\nHosted by: ${message.author}`)
          .setTimestamp(Date.now() + time_duration)
          .setFooter('Ends at')
        let msg = await client.channels.cache.get(`${channel}`).send(':tada: **GIVEAWAY** :tada:', embed)
          await msg.react('🎉')
            setTimeout(() => {
              msg.reactions.cache.get('🎉').users.remove(client.user.id)
                setTimeout(() => {
        let winner = msg.reactions.cache.get('🎉').users.cache.random();
        if (msg.reactions.cache.get('🎉').users.cache.size < 1) {
            const winner_embed = new Discord.MessageEmbed()
                .setTitle(`${prize}`)
                .setColor('#e92855')
                .setDescription(`No one entered the giveaway 🙁\n\nHosted by: ${message.author}`)
                .setTimestamp()
                .setFooter('Ended at')
                msg.edit(':tada: **Giveaway Ended** :tada:', winner_embed);
        }
        db.set(`giveaway.${message.guild.id}_${prize}_${channel}_${started_time_duration_start}`)	
          db.get(`giveaway.${message.guild.id}_${prize}_${channel}_${started_time_duration_start}`)	

        if (!msg.reactions.cache.get('🎉').users.cache.size < 1) {
            const winner_embed = new Discord.MessageEmbed()
                .setTitle(`${prize}`)
                .setColor('GREEN')
                .setDescription(`Winner:\n${winner}\n\nHosted by: ${message.author}`)
                .setTimestamp()
                .setFooter('Ended at')
                msg.edit(':tada: **Giveaway Ended** :tada:', winner_embed);
        }
        }, 1000);
        }, time_duration);

}        


		
		
		




	
})








client.login('ODU4Mzg5MTUxNDI2MTUwNDA3.YNdbMQ.nYEzOc7RvQUYb79hyNH_TRAhE7s');
