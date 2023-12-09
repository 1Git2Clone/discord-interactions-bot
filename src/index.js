require('dotenv').config(); // CHECK README.md
const { Client, IntentsBitField, messageLink } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online!`)
})

/// ! ! ! VARIABLES FOR COMMANDS ! ! !

const pengooQuotes = [
  "hu tao is fucking cute i cant",
  "# yes",
  "its pengover",
  "ah-",
  "LISSEN",
  "sweet dreams"
]
  



// Actual commands:

// "Hu Tao" msg response;

client.on('messageCreate', (message) => {
  if(message.author.bot) {
    return;
  }

  if (message.content === 'Hu Tao') {
    message.reply('HU TAO BEST GIRL! <3');
  }
})



// SLASH COMMANDS

client.on('interactionCreate', (interaction) => {
  if(!interaction.isChatInputCommand()) return;

  // console.log(interaction.commandName);

  switch(interaction.commandName) {
    case 'hey':
      interaction.reply('hey!');
      break;
    case 'quote':
      const randomQuoteIndex = Math.floor(Math.random() * pengooQuotes.length);
      const randomQuote = pengooQuotes[randomQuoteIndex];
      interaction.reply(randomQuote);
    default:
      break;
  }
});


client.login(process.env.TOKEN);
