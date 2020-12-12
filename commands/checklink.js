//check link function

//var webscraper = require("./../webscraper.js");
//require puppeteer to be able to scrape the website
const puppeteer = require('puppeteer');

module.exports = {
    name:'checklink',
    description: "Command to check a link provided by a user",
    execute(message, link){
        message.channel.send('Link found');
        //message.channel.send(link);
        scrapeNortonLinkChecker(message, link);
    }
}

async function scrapeNortonLinkChecker(message, url)
{
    console.log("scrape attempt");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [nortonRating] = await page.$x('//*[@id="bodyContent"]/div/div/div[3]/div[1]/div[1]/div[2]/div[1]/div/b');
    const txt = await nortonRating.getProperty('textContent');
    const nortonRatingTxt = await txt.jsonValue();

    const [nortonCommunityRating] = await page.$x('//*[@id="comRating"]/div/div[2]/label');
    const txt2 = await nortonCommunityRating.getProperty('textContent');
    const nortonCommunityRatingTxt = await txt2.jsonValue();

    //console.log({nortonRatingTxt, nortonCommunityRatingTxt});

    browser.close();
    var returnArray = [nortonRatingTxt.toString(), nortonCommunityRatingTxt.toString()];
    message.channel.send(returnArray);
}