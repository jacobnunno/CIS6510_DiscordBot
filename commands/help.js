//help command functions

module.exports = {
    name:'help',
    description: "Command to receive information about the bot",
    execute(message, args){
        message.channel.send('Commands:\n' +
        '\t-about\n\t\t Command to give you information about the purpose of the bot'+
        '\n\t-acoff\n\t\t Command to turn off the active message scanner for links'+
        '\n\t-acon\n\t\t Command to turn on the active message scanner for links'+
        '\n\t-checklink *link*\n\t\t Command to check a link that you specify');
    }
}          