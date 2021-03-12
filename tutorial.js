require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client()
const PREFIX = '*';

client.on('ready', () => {

    // client.user.setStatus('idle')
    // bot.user.setStatus('available')
    // client.user.setActivity("how to hang yourself.", {
    //     type: 'STREAMING',
    //     url:'https://stream.twitch.tv/ingests/'
    // });
    
    console.log(`${client.user.tag} has logged in.`)
});

client.on('message', async (message) => {
    var cont = message.content.substring(4, message.content.length)
    if (message.author.bot)
        return;
    if (message.content.toLowerCase() === ('hi slave')) {
        message.channel.send('Hi ' + message.author.tag.substring(message.author.tag.length - 5) + ' :banana: ')
    }
    if (message.content.toLowerCase().includes('your mase')) {
        message.channel.send(`Nobody deserves to be spoken to in this way! :cry: `)
    }
    if (message.content.includes('I am') || message.content.includes('i am')) {
        message.channel.send('Hi ' + message.content.substring(4, message.content.length) + ' , I am your master. Bow down to me.')
    }
    if (message.content.toLowerCase().startsWith('say hi to')) {
        console.log(message.content.length - 6)
        message.channel.send('Hi ' + message.content.substring(10,message.content.length )+' 😅')
    }
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

    }
    // if(message.content==="hello"){
    //     // message.reply(' Hi there!')
    //     message.channel.send("hello")
    // }
   
})


client.login(process.env.DISCORD_TOKEN)