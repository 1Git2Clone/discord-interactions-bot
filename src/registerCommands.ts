/* discord-interactions-bot/src/registerCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         14.13.2023 (DD/MM/YYYY)
// Used ChatGPT? Not on this file actually. tutorial vid instead... https://www.youtube.com/watch?v=KZ3tIGHU314

require('dotenv').config(); // CHECK README.md
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'help',
    description: 'Shows a list of all the available commands.',
  },
  {
    name: 'quote',
    description: 'Replies with a nopengoo quote (random if no index is specified)',
    options: [
      {
        name: 'quote_number',
        type: 4, // Type 4 represents an integer
        description: 'Optional: The index of the quote (starting from 1)',
        required: false,
      },
    ],
  },
  {
    name: 'quotelist',
    description: 'Lists out the available quotes to you'
  },
  {
    name: 'tieup',
    description: 'Tie up the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to tie up',
        required: true,
      },
    ],
  },
  {
    name: 'hug',
    description: 'Hug the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to hug',
        required: true,
      },
    ],
  },
  {
    name: 'pat',
    description: 'Pat the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to pat',
        required: true,
      },
    ],
  },
  {
    name: 'kiss',
    description: 'Kiss the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to kiss',
        required: true,
      },
    ],
  },
  {
    name: 'slap',
    description: 'Slap the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to slap',
        required: true,
      },
    ],
  },
  {
    name: 'punch',
    description: 'Punch the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to punch',
        required: true,
      },
    ],
  },
  {
    name: 'bonk',
    description: 'Bonk the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to bonk',
        required: true,
      },
    ],
  },
  
  {
    name: 'drive',
    description: 'Sends a random Ryan Gosling GIF.'
  },
  {
    name: 'nom',
    description: 'Nom the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to nom',
        required: true,
      },
    ],
  },
  {
    name: 'eat',
    description: 'Eat the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to eat',
        required: true,
      },
    ],
  },
  {
    name: 'kill',
    description: 'Kill the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to kill',
        required: true,
      },
    ],
  },
  {
    name: 'kick',
    description: 'Kick the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to kick',
        required: true,
      },
    ],
  },
  {
    name: 'level',
    description: 'Display the level of a user. (You by default)',
    options: [
      {
        name: 'target-user',
        type: 6, // Type 6 represents a user
        description: 'The user to check level. (Default = You)',
        required: false,
      },
    ],
  },
  {
    name: 'topranks',
    description: 'Displays the top 10 users from the /level system! (Biggest yappers)',
  },
  {
    name: 'bury',
    description: 'Bury the mentioned user',
    options: [
      {
        name: 'user',
        type: 6, // Type 6 represents a user
        description: 'The user to bury',
        required: true,
      },
    ],
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
