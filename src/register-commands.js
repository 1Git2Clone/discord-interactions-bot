require('dotenv').config(); // CHECK README.md
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'quote',
    description: 'Replies with a random nopengoo quote',
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