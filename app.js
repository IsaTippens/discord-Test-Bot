const { Client, WebhookClient } = require('discord.js');
const client = new Client({
    partials: ['MESSAGE', 'REACTION']
});
require('dotenv').config();
const webHookClient = new WebhookClient(process.env.WEBHOOK_ID,
    process.env.WEBHOOK_TOKEN)
// const DiscordRPC = require('discord-rpc');
// const config = require('./config.json');
// const rpc = new DiscordRPC.Client({
// 	transport: 'ipc'
// });

const PREFIX = '*';

// rpc.config = config;


//bot spam 818478999768399882



client.on('ready', () => {
    //  client.user.setPresence({ activity: 'YouTube' }, {type:"WATCHING"},{status: 'online' })
    client.user.setActivity("YouTube", { type: "WATCHING" })
    // client.user.setStatus('idle')
//    const getBotSpamID=client.channels.cache.get('818478999768399882');
//    const media=client.Attachments.send("https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3fBnuktBLwif6MptlBEWnC&ust=1615560026899000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiVmo28qO8CFQAAAAAdAAAAABAD")
//   getBotSpamID.send("bread") // client.user.setStatus('idle')
//   getBotSpamID.send(media)
    // bot.user.setStatus('available')
    // client.user.setActivity("how to hang yourself.", {
    //     type: 'STREAMING',
    //     url:'https://stream.twitch.tv/ingests/'
    // });

    console.log(`${client.user.tag} has logged in.`)
   
    // client.guilds.cache.forEach((guild) => {
    //     console.log(guild.name);
    //     guild.channels.cache.forEach((channel) => {
    //         console.log(`- ${channel.name} ${channel.type} ${channel.id}`);
    //     });
    // });
    
});
client.on('message', async (message) => {
    console.log(message.author)
    // console.log(client.user.typingDurationIn("818478999768399882"));
    // console.log(message.author.username)
    console.log(client.user);
    var cont = message.content.substring(4, message.content.length)
    if (message.author.bot)
        return;
    if (message.content.toLowerCase() === ('hi slave')) {
        message.channel.send('Hi ' + message.author.tag.substring(message.author.tag.length - 5) + ' :banana: ')
    }
    if (message.content.toLowerCase().includes('your mase')) {
        message.channel.send(`Nobody deserves to be spoken to in this way! :cry: `)
    }

    if (message.author.username !== 'Sneaky') {
        //   console.log(!message.author.tag==='Sneaky#8495')
        if (message.content.includes('I am') || message.content.includes('i am') || message.content.includes(`i'm`) || message.content.includes(`I'm`) || message.content.includes(`im`)) {
            message.channel.send('Hi ' + message.content.substring(4, message.content.length) + ' , I am your master. Bow down to me.')
        }

    }

    if (message.content.toLowerCase().startsWith('say hi to')) {
        // console.log(message.content.length - 6)
        message.channel.send('Hi ' + message.content.substring(10, message.content.length) + ' 😅')
    }

    //    if( client.user.typingDurationIn()>1000){
    // message.channel.send("what the fuck are you typing ??")
    //    }
    // console.log(`[${message.author.tag}]: ${message.content}`);
    // if (message.content==="say hello Senpai"){
    //     message.channel.send("hello "+`${client}`)
    // }
    if (message.content.startsWith(PREFIX)) {
        const [commandName, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        if (commandName === 'kick') {
            if (!message.member.hasPermission('KICK_MEMBERS'))
                return message.reply('You do not have permissions to use that command');
            if (args.length === 0)
                return message.reply('Please provide an ID');
            const member = message.guild.members.cache.get(args[0]);
            if (member) {
                try {
                    await member
                        .kick()
                    await message.channel.send(`${member} was kicked.`)
                }
                catch (err) {
                    message.channel.send('I Need MORE POWER.')
                }

            } else {
                message.channel.send('That member was not found');
            }
        }
        else if (commandName === "ban") {
            if (!message.member.hasPermission('BAN_MEMBERS'))
                return message.reply("You do not have the permissions to use that command.")
            if (args.length === 0)

                return message.reply("Please provide an ID.");
            try {
                const user = await message.guild.members.ban(args[0])
                console.log(user);
                message.channel.send('User was banned successfully.')
            }
            catch (err) {
                console.log(err);
                message.channel.send("I do not have permissions or the user was not found.")
            }
            //  .then((member) => message.channel.send(`${member} was banned.`))
            //  .catch((err)=>message.channel.send('I do not have the power.'))


            //  else if (commandName==='ban'){
            //      message.channel.send('banned the user')
            //  }
        }
        else if (commandName === 'announce') {
            console.log(args)
            const msg = args.join(' ');
            webHookClient.send(msg)
        }
    }
    // if(message.content==="hello"){
    //     // message.reply(' Hi there!')
    //     message.channel.send("hello")
    // }
})
client.on("messageDelete", async (message) => {
    console.log("bread");
    message.channel.send(`Please don't remove your messages!😥`)
})
client.on("messageReactionAdd", (reaction, user) => {
    const { name } = reaction.emoji
    const member = reaction.message.guild.members.cache.get(user.id)
    // console.log("hello !");
    if (reaction.message.id === "819179166607212575") {
        switch (name) {
            case '❤️':
                member.roles.add("810813591795793980")
                break;

            case '🍌':
                member.roles.add("818532804953636875")
                break;
            case '😌':
                member.roles.add("819185586693734400")
                break;
            case "🤩":
                member.roles.add("817741885065789440")
                break;
        }
    }
})
client.on("messageReactionRemove", (reaction, user) => {
    const { name } = reaction.emoji
    const member = reaction.message.guild.members.cache.get(user.id)
    // console.log("hello !");
    if (reaction.message.id === "819179166607212575") {
        switch (name) {
            case '❤️':
                member.roles.remove("810813591795793980")
                break;

            case '🍌':
                member.roles.remove("818532804953636875")
                break;
            case '😌':
                member.roles.remove("819185586693734400")
                break;
            case "🤩":
                member.roles.remove("817741885065789440")
                break;
        }
    }
})
// //Creating a start- and endTimestamp for the initial timer
// var d1 = new Date ();
// var d2 = new Date(d1);
// // Adding Epochs to set the timer
// d2.setSeconds(d1.getSeconds() + config.Rich_Presence.countdown_start);

// //Fancy banner for in the console...
// var banner = `______ _                       _           ____________  _____ 
// |  _  (_)                     | |          | ___ \\ ___ \\/  __ \\
// | | | |_ ___  ___ ___  _ __ __| |  ______  | |_/ / |_/ /| /  \\/
// | | | | / __|/ __/ _ \\| '__/ _\` | |______| |    /|  __/ | |    
// | |/ /| \\__ \\ (_| (_) | | | (_| |          | |\\ \\| |    | \\__/\\
// |___/ |_|___/\\___\\___/|_|  \\__,_|          \\_| \\_\\_|     \\____/

//                                                                `;


// rpc.on('ready', () => {
// 	console.clear();
// 	console.log(banner);
// 	console.log("Setting RPC activity...");

// 	//TODO Probably add enable/disable options in config.json

// 	//Sets the initial Rich Presence
// 	rpc.setActivity({
// 		details: config.Rich_Presence.details,
// 		state: config.Rich_Presence.state,
// 		largeImageKey: config.Rich_Presence.file_bannername,
// 		largeImageText: config.Rich_Presence.bannername,
// 		smallImageKey: config.Rich_Presence.file_username,
// 		smallImageText: config.Rich_Presence.username,
// 		instance: false,
// 		partySize: 0,
// 		partyMax: config.Rich_Presence.maxpartysize,
// 		startTimestamp: d1,
// 		endTimestamp: d2
// 	}).then(console.clear(), console.log(banner), console.log(`RPC has been set! If it doesn’t set immediately please wait for it to refresh (if set) or just re-node app.js`)).catch(err => { });

// 	if (config.Rich_Presence.Refresh) {
// 		// Activity can only be set every 15 seconds
// 		setInterval(() => {
// 		//Create random party size every update
// 		var partysize = Math.floor(Math.random() * (config.Rich_Presence.maxpartysize - 0 + 1)) + 0;
// 		//Resetting the timer
// 		var t1 = new Date();
// 		var t2 = new Date ( t1 );
// 		t2.setSeconds(t1.getSeconds() + config.Rich_Presence.countdown_start);
// 		//Setting the activity again with updated values	
// 		rpc.setActivity({
// 			details: config.Rich_Presence.details,
// 			state: config.Rich_Presence.state,
// 			largeImageKey: config.Rich_Presence.file_bannername,
// 			largeImageText: config.Rich_Presence.bannername,
// 			smallImageKey: config.Rich_Presence.file_username,
// 			smallImageText: config.Rich_Presence.username,
// 			instance: false,
// 			partySize: partysize,
// 			partyMax: config.Rich_Presence.maxpartysize,
// 			startTimestamp: t1,
// 			endTimestamp: t2
// 		}).then(console.clear(), console.log(banner), console.log(`Updated the RPC ${++config.Dont_Touch.updatecounter} time(s)!`)).catch(err => {});
// 	  }, (config.Rich_Presence.Refresh_time * 1000));
// 	}
// });

client.login(process.env.DISCORD_TOKEN);
// rpc.login(config.Client_Id).catch(console.error);
