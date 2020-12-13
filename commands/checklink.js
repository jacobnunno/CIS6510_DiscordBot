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
        scrapeTransparencyReportLinkChecker(message, link)
    }
}

async function scrapeNortonLinkChecker(message, url)
{
    
    const nortonURL = "https://safeweb.norton.com/report/show?url=" + url.toString();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(nortonURL);

    //grab the correct element
    const [nortonRating] = await page.$x('//*[@id="bodyContent"]/div/div/div[3]/div[1]/div[1]/div[2]/div[1]/div/b');
    const txt = await nortonRating.getProperty('textContent');
    const nortonRatingTxt = await txt.jsonValue();

    const [nortonCommunityRating] = await page.$x('//*[@id="comRating"]/div/div[2]/label');
    const txt2 = await nortonCommunityRating.getProperty('textContent');
    const nortonCommunityRatingTxt = await txt2.jsonValue();

    browser.close();
    message.channel.send("Norton Report:\n" + "\tNorton Rating: " + nortonRatingTxt + "\n" + "\tNorton Community Rating: " + nortonCommunityRatingTxt);
}

async function scrapeTransparencyReportLinkChecker(message, url)
{
    //site with malware for testing:
    // malware.testing.google.test
    var trimmedURL = url.replace(/\//g, "%2F");

    const TrURL = "https://transparencyreport.google.com/safe-browsing/search?url=" + trimmedURL.toString();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(TrURL);

    //grab the correct element
    const [TransparencyReportRating] = await page.$x('//*[@id="scrolling-element"]/safe-browsing-report/ng-component/site-status-result/report-section/section/div/data-tile/div[2]/span');
    const txt = await TransparencyReportRating.getProperty('textContent');
    const TransparencyReportRatingTxt = await txt.jsonValue();

    browser.close();
    
    message.channel.send("Google Transparency Report Report:\n" + "\t" + TransparencyReportRatingTxt);
}