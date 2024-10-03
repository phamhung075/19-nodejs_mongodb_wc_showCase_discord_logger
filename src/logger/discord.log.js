'use strict';

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const token = "MTI5MTI4OTUwNDg2MjE3OTM1OA.GQnIAV.Klm0PQI-bI3ElNv0wcp5gvjElVLKR2wIRWKYH0"
client.login(token);

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content === 'ping') {
        message.reply('pong');
    }
});