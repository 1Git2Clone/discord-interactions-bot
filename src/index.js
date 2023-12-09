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
  console.log(`⚜️  ${c.user.tag} is online!`)
})

/// ! ! ! VARIABLES FOR COMMANDS ! ! !

const pengooQuotes = [
  "hu tao is fucking cute i cant",
  "# yes",
  "https://media.discordapp.net/stickers/1181980659825262662.webp?size=160", // "its pengover",
  "ah-",
  "LISSEN",
  "sweet dreams",
  "Stop saying 'kys' lil bro"
]
  


// ALL COMMANDS



// MESSAGE COMMANDS (NOT USING)

/*
client.on('messageCreate', (message) => {
  if(message.author.bot) {
    return;
  }

  if (message.content === 'Hu Tao') {
    message.reply('HU TAO BEST GIRL! <3');
  }

  // emoji testing
  
  if (message.content === 'emote') {
    const emojiId = '1183105414032793600';
    const emoji = `<:TOOBASED:${emojiId}>`;

    message.reply(emoji);
  }
  
})
*/

// SLASH COMMANDS (USING)

client.on('interactionCreate', (interaction) => {
  if(!interaction.isChatInputCommand()) return;

  const userToTieup = interaction.options.getUser('user');
  const invoker = interaction.user;

  switch(interaction.commandName) {
    case 'quote':
      const randomQuoteIndex = Math.floor(Math.random() * pengooQuotes.length);
      const randomQuote = pengooQuotes[randomQuoteIndex];
      interaction.reply(randomQuote);
      break;
    case 'tieup':
      if (userToTieup && invoker !== userToTieup) {
        interaction.reply(`## *${invoker.toString()} ties up ${userToTieup.toString()}*\nhttps://tenor.com/view/tied-up-aiura-anime-gif-19863563`);
      }
      else {
        interaction.reply(`${userToTieup.toString()} Why do you wanna tie yourself up mate?\n||please tie me up instead~~!||`);
      }
      break;
    default:
      break;
  }
});


client.login(process.env.TOKEN);
