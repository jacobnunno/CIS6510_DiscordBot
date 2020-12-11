//check link function

module.exports = {
    name:'checklink',
    description: "Command to check a link provided by a user",
    execute(message, args){
        message.channel('checking the link now');
    }
}