//file to include tool functions for our commands


//
let request = require(`request`);
let fs = require(`fs`);


module.exports = {     
    //regex function to check if a string is a valid URL
    //taken from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
    validURL : function(str) 
    {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    },

    download : function (url)
    {
      request.get(url)
      .on('error', console.error)
      .pipe(fs.createWriteStream('file'));
    }
}