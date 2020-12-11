//help command functions

module.exports = {
    name:'help',
    description: "Command to receive information about the bot",
    execute(message, args){
        message.channel.send('Thank you for contacting the help command, we are currently offline. please try again later.');
    }
}