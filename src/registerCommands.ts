/* discord-interactions-bot/src/registerCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         14.13.2023 (DD/MM/YYYY)
// Used ChatGPT? Not on this file actually. tutorial vid instead... https://www.youtube.com/watch?v=KZ3tIGHU314

require('dotenv').config(); // CHECK README.md
const data = require('./data/data') // just check the command names from this file, meant for modularity in the code (1 change do 2 change at once)
const { REST, Routes } = require('discord.js');

const commands = [
  { // help
    name: data.commandArray[0].name,
    description: data.commandArray[0].description,
  },
  { // quote
    name: data.commandArray[1].name,
    description: data.commandArray[1].description,
    options: [
      {
        name: 'quote_number',
        type: 4, // Type 4 represents an integer
        description: 'Optional: The index of the quote (starting from 1)',
        required: false,
      },
    ],
  },
  { // quotelist
    name: data.commandArray[2].name,
    description: data.commandArray[2].description,
  },
  { // tieup (kinky hehe)
    name: data.commandArray[3].name,
    description: data.commandArray[3].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to tie up',
        required: true,
      },
    ],
  },
  { // hug
    name: data.commandArray[4].name,
    description: data.commandArray[4].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to hug',
        required: true,
      },
    ],
  },
  { // pat
    name: data.commandArray[5].name,
    description: data.commandArray[5].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to pat',
        required: true,
      },
    ],
  },
  { // kiss
    name: data.commandArray[6].name,
    description: data.commandArray[6].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to kiss',
        required: true,
      },
    ],
  },
  { // slap
    name: data.commandArray[7].name,
    description: data.commandArray[7].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to slap',
        required: true,
      },
    ],
  },
  { // punch
    name: data.commandArray[8].name,
    description: data.commandArray[8].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to punch',
        required: true,
      },
    ],
  },
  { // bonk
    name: data.commandArray[9].name,
    description: data.commandArray[9].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to bonk',
        required: true,
      },
    ],
  },
  { // drive
    name: data.commandArray[10].name,
    description: data.commandArray[10].description,
  },
  { // nom
    name: data.commandArray[11].name,
    description: data.commandArray[11].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to nom',
        required: true,
      },
    ],
  },
  { // eat (same as nom)
    name: data.commandArray[12].name,
    description: data.commandArray[12].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to eat',
        required: true,
      },
    ],
  },
  { // kill (dont kys tho <3)
    name: data.commandArray[13].name,
    description: data.commandArray[13].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to kill',
        required: true,
      },
    ],
  },
  { // kick (in the physical term not the moderation one)
    name: data.commandArray[14].name,
    description: data.commandArray[14].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to kick',
        required: true,
      },
    ],
  },
  { // level (KEEP ON YAPPINGGGG)
    name: data.commandArray[15].name,
    description: data.commandArray[15].description,
    options: [
      {
        name: 'target-user',
        type: 6, // Type 6 represents a user
        description: 'The user to check level. (Default = You)',
        required: false,
      },
    ],
  },
  { // topranks (TOP YAPPERS WOO!)
    name: data.commandArray[16].name,
    description: data.commandArray[16].description,
  },
  { // bury - Hu Tao's business is blooming!!
    name: data.commandArray[17].name,
    description: data.commandArray[17].description,
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to bury',
        required: true,
      },
    ],
  },
  { // chair (motivated)
    name: data.commandArray[18].name,
    description: data.commandArray[18].description,
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    // .env file should look like: GUILD_ID = 123,456,789 and so on
    const targetGuilds = process.env.GUILD_IDS?.split(',') || [];

    if (targetGuilds.length === 0) {
      console.log('No target guilds specified in the environment variable GUILD_IDS.');
      return;
    }

    for (const guildId of targetGuilds) {
      await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, guildId),
        { body: commands }
      );

      console.log(`Slash commands were registered successfully for guild ID: ${guildId}`);
    }
  } catch (error) {
    console.error(`There was an error: ${error}`);
  }
})();