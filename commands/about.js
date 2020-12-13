//about command functions

module.exports = {
    name:'about',
    description: "Command to receive information about the bot",
    execute(message, args){
        message.channel.send('about command');
    }
}