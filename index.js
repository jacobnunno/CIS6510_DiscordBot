//main controller for the bot
//listens for two types of messages:
//       a message with the prefix -
//       any message with a link in it

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'; 

//Paste your token in here
const token = 'Nzg3MDA2MDQ4ODU4ODAwMTM4.X9Oqfw.z39PPJu7BXSEZ0w_O5sXT-tTqVA';

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

//global for active comment checker
var activechecker = true;

//reply to confirm that the bot is running
client.once('ready', () => {
    console.log('cybersecurity bot is running');
})

client.on('message', message => {
    //if the message doesn't start with the prefix, and if the message is not from the bot and if the activechecker flag is set to true
    //active message checker for links

    if(!message.content.startsWith(prefix) && !message.author.bot && activechecker)
    {
        //console.log(message.content);
        const wordsInMessage = message.content.split(" ");
        //loop through words and check if any of the words have a link
        var i;
        for(i = 0; i < wordsInMessage.length; i++)
        {
            if(tools.validURL(wordsInMessage[i]))
            {   
                //found a link
                message.channel.send('Found a link! Running diagnostics now');
                //run diagnostics on the link
                client.commands.get('checklink').execute(message, wordsInMessage[i]);
            }
        }
    }
    //if the message starts with the prefix and the message is not from the bot
    //This is where commands are run
    else if(message.content.startsWith(prefix) && !message.author.bot)
    {    
        //splicing off the second part of the command
        const args = message.content.slice(prefix.length).split(/ +/);
        
        //pop off the first element of the array into command and make it all lower case
        const command = args.shift().toLowerCase();

        //switch command to call appropriate functions according to command used
        switch(command){
            case 'help':
                client.commands.get('help').execute(message, args);
                break;
            case 'about':
                client.commands.get('about').execute(message, args);
                break;
            case 'acoff':
                    activechecker = false; 
                    message.channel.send('Active Message Checking is now off');
                    break;
            case 'acon':
                    activechecker = true; 
                    message.channel.send('Active Message Checking is now on');
                    
                    break;
            case 'checklink':
                    if(args.length == 1)
                    {
                        //we popped off the first element so now args0 is the link 
                        if(tools.validURL(args[0]))
                        {   
                            client.commands.get('checklink').execute(message, args[0]);
                        }
                        else
                        {
                            message.channel.send('URL is not a valid URL');
                        }
                    }
                    break;
            default:
                message.channel.send('That is not a valid command, try -help to view valid commands');
        };
    }
})

//last line of file:
client.login(token);
