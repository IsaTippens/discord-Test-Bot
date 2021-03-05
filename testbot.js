const Discord = require('discord.js')
const client = new Discord.Client()

// client.on('ready', () => {
//     console.log("Connected as " + client.user.tag)
    
// })


client.on('ready', () => {
    var generalChannel = client.channels.cache.get("514108678245449730") // Replace with known channel ID
    generalChannel.send("Hi there")  
    client.user.setStatus("idle");
    message.guild.members.get("396408102154534912"); 
    // List servers the bot is connected to
    // console.log("Servers:")
    // client.guilds.forEach((guild) => {
    //     console.log(" - " + guild.name)
    // })
    //  // List all channels
    //  guild.channels.forEach((channel) => {
    //     console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
    // })

})
// Get your bot's secret token from:
// // https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"


client.login(process.env.DISCORD_TOKEN)
