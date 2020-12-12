//CyberSecurity Bot
//discord bot code based off of youtube videos by: CodeLyon on youtube.
//startign video can be found here: https://www.youtube.com/watch?v=j_sD9udZnCk&ab_channel=CodeLyon
//open command prompt in the appropriate folder, type command:
//  node .

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';

//set up the different commands/function collection
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//require the tools.js 
var tools = require("./tools.js");


client.once('ready', () => {
    console.log('cybersecurity bot is running');
})

client.on('message', message => {
    //if the message doesn't start with the prefix, or if the message if from the bot
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;
    
    //show in console the message that was sent
    console.log(message.content);
    //splicing off the second part of the command
    const args = message.content.slice(prefix.length).split(/ +/);
    
    //show in console the args list
    console.log(args);
    //pop off the first element of the array into command and makes it all lower case
    const command = args.shift().toLowerCase();
    console.log(command);

    //switch command to call appropriate functions
    switch(command){
        case 'help':
            client.commands.get('help').execute(message, args);
            break;
        case 'checklink':
                console.log(args[0])
                if(args.length == 1)
                {
                    //we popped off the first element so now args0 is the link 
                    if(tools.validURL(args[0]))
                    {   
                        client.commands.get('checklink').execute(message, args);
                    }
                    else
                    {
                        message.channel.send('URL is not a valid URL');
                    }
                }
                break;
        default:
    };
})




















//last line of file:
client.login('Nzg3MDA2MDQ4ODU4ODAwMTM4.X9Oqfw.gb5qbB7P5Nu_M3seJtQKxdjBKpg');