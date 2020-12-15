<!-- template taken off of: https://github.com/othneildrew/Best-README-Template/blob/master/README.md -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Cybersecurity Discord Moderator Bot</h3>

  <p align="center">
    A bot that will help keep your discord community safe!!
  </p>
  <p align="center">
     https://github.com/jacobnunno/CIS6510_DiscordBot
  </p>
</p>
<br />

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Discord has become a very popular place for large communities to gather. Thousands of people in a server with little to no moderation is a recipe for disaster. This bot will run in the background of your server 24/7 and remove links that it finds to be malicious.

Here's why:
* Anyone can join these public servers and post malicious links
* It is impossible to have a moderator team analyse every link that is posted
* Once you set up the bot you will no longer have to worry


### Built With

* [NodeJS](https://getbootstrap.com)
* [NPM](https://www.npmjs.com/)
* [Discord.js](https://discord.js.org/#/)
* [Puppeteer](https://www.npmjs.com/package/puppeteer)
* [vultr](https://my.vultr.com/)

With tools:
* [Norton Safe Web](https://safeweb.norton.com/)
* [Google Transparency Report](https://transparencyreport.google.com/safe-browsing/search?hl=en)

<!-- GETTING STARTED -->
## Getting Started

Here is a very useful youtube video on how to set up a simple discord bot: https://www.youtube.com/watch?v=j_sD9udZnCk&ab_channel=CodeLyon

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/jacobnunno/CIS6510_DiscordBot
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create an application in discord
   ```sh
   www.discord.com/developers/applications
   ```
5. Change your application to a bot application by selecting your new application you just made, then clicking on the bot tab. Then convert the application to a bot.

6. Give your application every persmission possible. Go to the link below and check every persmission.
   ```sh
   https://discordapi.com/permissions.html
   ```
6. Copy the Client ID from your "General Information Page" of your application and input into the permissions website above. 

7. Click the the link that discordapi.com/permissions generates.

8. Add the bot to your server.

9. Go back to www.discord.com/developers/applications, select your application and then move to the "Bot" tab.

10. Copy the "Token"(don't give anyone this token because if you do they'll be able to take control of your bot)

11. Go to index.js and paste the token in the variable "token"
   ```sh
   const token = 'YOURTOKENHERE';
   ```
   
12. Write this command in the command prompt to start the bot!
   ```sh
   node .
   ```

13. Your bot should be up and running! You should get the following message in your command prompt and your bot on discord should be online.
   ```sh
   cybersecurity bot is running
   ```
   
14. To set up your bot on a server, follow the steps in this guide:
   ```sh
   https://www.writebots.com/discord-bot-hosting/
   ```
   
<!-- USAGE EXAMPLES -->
## Usage

Commands:

    -about
    
         Command to give you information about the purpose of the bot
         
    -acoff
    
         Command to turn off the active message scanner for links
         
    -acon
    
         Command to turn on the active message scanner for links
         
    -checklink ***link***
    
         Command to check a link that you specify

<!-- CONTACT -->
## Contact

Giacomo Nunno - jacobnunno@hotmail.com
