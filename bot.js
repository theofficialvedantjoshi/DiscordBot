console.log("beep! beep!");
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzk0OTE0ODEyNjgwMzM5NDY3.X_BwHA.LPRJw9TL6E3X_I3XYyQ6f0O1Tv0');
const fetch = require('node-fetch');
client.on('ready', readyDiscord);

function readyDiscord () {
    console.log('Online');
}
client.on('message',gotMessage);
const tenorapi = '74ERUY1KE0LL'
const replies = [
    'sup!',
    'sup homie!',
    'stfu!',
    'what do u want ? Im Busy....'
];
const commands = [
    'gif',
    'hi',
    'hello',
    'sendmeme',
    'myinfo'
];
async function gotMessage(msg){
    let tokens = msg.content.split(' ');

    if (tokens[0] === '!'+ commands[0]){
        let keywords = 'meme';
        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(" ");
        }
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${tenorapi}`
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send("Here's a gif for ya!!!")
        msg.channel.send(json.results[index].url);
    }
    if (tokens[0] === '!'+ commands[1] || msg.content === '!'+ commands[2]){
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }
    
}
