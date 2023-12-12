// Author:       1Kill2Steal (https://github.com/1Kill2Steal/)
// DATE:         12.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

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
    name: 'slap',
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
    name: 'punch',
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
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
  console.log('Registering slash commands...')

  await rest.put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID,
      process.env.GUILD_ID
      ),
    { body: commands }
  );

  console.log('Slash commands were registered successfully!')
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();