//check link function

module.exports = {
    name:'checklink',
    description: "Command to check a link provided by a user",
    execute(message, link){
        message.channel.send('Link found: ');
        message.channel.send(link);
    }
}