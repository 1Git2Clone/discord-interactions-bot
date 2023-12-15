/* discord-interactions-bot/src/index.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         14.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

require('dotenv').config(); // CHECK README.md

import { CommandInteraction, Message } from 'discord.js';


// ASSIGNING INTENTS (https://discordjs.guide/popular-topics/intents.html)

const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// database
const mongoose = require('mongoose');

(async () =>{
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to DB.`);

    // STARTS THE BOT WITH THE AUTHENICATED IN (.env) TOKEN
    client.login(process.env.TOKEN);
  } catch (error) {
    console.log(error);
  }
})();

// STARTING CLIENT TERMINAL MSG

client.on('ready', (c: { user: { tag: any; }; }) => {
  console.log(`⚜️  ${c.user.tag} is online!`)

  client.user.setActivity({
    name: "SUB TO NOPENGOO ON YOUTUBE",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=Yw_ODTfLcbE"
  });
})


// ! ! ! COMMANDS ! ! ! - INITIALIZED IN "src/initializeCommands" AND PROCESSED IN "src/processCommands"


// MESSAGE COMMANDS (USER REPLY ONLY ADAPTATION FOR SLASH COMMANDS) (Unfortunately I dont know how do get it to work with "!pat @direct.ping")
client.on('messageCreate', async (message: Message) => {

  require('./messageCreate/giveUserXp')(client, message); 
  require('./processCommands/messageCommands')(client, message, message.author);

})

// SLASH COMMANDS ('./slashCommands.js)
client.on('interactionCreate', async (interaction: CommandInteraction) => {

  require('./processCommands/slashCommands')(interaction, interaction.user)
  
});