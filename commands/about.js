//about command functions

module.exports = {
    name:'about',
    description: "Command to receive information about the bot",
    execute(message, args){
        message.channel.send('CyberSecurityBot is a bot that monitors your discord channel' +
         ' and scans every comment for links. If it does find a link, it will check the ' +
         'link on these two websites:\n' + '\thttps://safeweb.norton.com/\n' + 
         '\thttps://transparencyreport.google.com/');
    }
}