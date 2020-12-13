//check link function

//var webscraper = require("./../webscraper.js");
//require puppeteer to be able to scrape the website
const puppeteer = require('puppeteer');

module.exports = {
    name:'checklink',
    description: "Command to check a link provided by a user",
    execute(message, link){
        //message.channel.send('Link found');
        //message.channel.send(link);
        scrapeNortonLinkChecker(message, link);
        //scrapeURLVoidLinkChecker(message, url)
    }
}

async function scrapeNortonLinkChecker(message, url)
{
    const nortonURL = "https://safeweb.norton.com/report/show?url=" + url.toString();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(nortonURL);

    const [nortonRating] = await page.$x('//*[@id="bodyContent"]/div/div/div[3]/div[1]/div[1]/div[2]/div[1]/div/b');
    const txt = await nortonRating.getProperty('textContent');
    const nortonRatingTxt = await txt.jsonValue();

    const [nortonCommunityRating] = await page.$x('//*[@id="comRating"]/div/div[2]/label');
    const txt2 = await nortonCommunityRating.getProperty('textContent');
    const nortonCommunityRatingTxt = await txt2.jsonValue();

    browser.close();
    message.channel.send("Norton Report:\n" + "\tNorton Rating: " + nortonRatingTxt + "\n" + "\tNorton Community Rating: " + nortonCommunityRatingTxt);
}

async function scrapeURLVoidLinkChecker(message, url)
{
    console.log("scrape URLVoid");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    //TODO GIACOMO
    // shave the url so that I can input it straight into the urlvoid url
    //  like this: https://www.urlvoid.com/scan/google.com/
    //set up the proper elements to grab

    const [URLVoidRating] = await page.$x('//*[@id="bodyContent"]/div/div/div[3]/div[1]/div[1]/div[2]/div[1]/div/b');
    const txt = await URLVoidRating.getProperty('textContent');
    const URLVoidRatingTxt = await txt.jsonValue();

    browser.close();
}