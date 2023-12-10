require('dotenv').config(); // CHECK README.md
const { Client, IntentsBitField, messageLink, Embed, EmbedBuilder } = require('discord.js');

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


  


// ALL COMMANDS



// MESSAGE COMMANDS (ADAPTATION FOR SLASH COMMANDS - NOT USING)

/*
client.on('messageCreate', (message) => {
  if(message.author.bot) {
    return;
  }
  
  // plain command testing

  if (message.content === 'Hu Tao') {
    message.reply('HU TAO BEST GIRL! <3');
  }

  // emoji testing
  
  if (message.content === 'emote') {
    const emojiId = '1183105414032793600';
    const emoji = `<:TOOBASED:${emojiId}>`;

    message.reply(emoji);
  }
  
  // "/tieup" testing but as a message command (didn't work well)

  if (message.content.toLowerCase() === '/tieup' && message.mentions.users.size > 0) {
    const userToTieup = message.mentions.users.first();
    const invoker = message.author;

    if (userToTieup && invoker !== userToTieup) {
      message.reply(`## *${invoker.toString()} ties up ${userToTieup.toString()}*\nhttps://tenor.com/view/tied-up-aiura-anime-gif-19863563`);
      return;
    } else {
      message.reply(`${userToTieup.toString()} Why do you wanna tie yourself up mate?\n||*please tie me up instead~~!*||`);
      return;
    }
  }
  
})
*/

// SLASH COMMANDS (USING)

client.on('interactionCreate', async (interaction) => {
  if(!interaction.isChatInputCommand()) return;

  const pengooQuotes = [
    "hu tao is fucking cute i cant",
    "# yes",
    "https://media.discordapp.net/stickers/1181980659825262662.webp?size=160", // "its pengover",
    "ah-",
    "LISSEN",
    "sweet dreams",
    "Stop saying 'kys' lil bro",
    `Yo rizz me up? Umm, okay, I assume you meant to say "Tie me up" right? Uhm, well, I'm really not sure about that but-`
  ]
  
  const userToTieup = interaction.options.getUser('user');
  const invoker = interaction.user;

  switch(interaction.commandName) {
    case 'quote':
      const index = interaction.options.getInteger('index') - 1; // Get the specified index

      const randomIndex = ( index >= 0 && (index < pengooQuotes.length + 1) ) ? (index) : ( Math.floor(Math.random() * pengooQuotes.length) );

      const selectedQuote = pengooQuotes[randomIndex];

      // Reply with the quote
      interaction.reply(`${selectedQuote}`);
      break;
    case 'quotelist':
      const quoteList = pengooQuotes.map((quote, i) => `**${i+1}:** ${quote}`).join('\n');

      interaction.reply({
        content: `Here are the available quotes:\n${quoteList}`,
        ephemeral: true,
      });
      break;
    case 'tieup':
      if (userToTieup && invoker !== userToTieup) {
        const tieupEmbed = new EmbedBuilder()
        .setColor('#ff6d66')
        .setImage('https://cdn.discordapp.com/attachments/614790390020833280/1183349571468918814/tied-up-aiura.gif?ex=6588032b&is=65758e2b&hm=b92c39af90ca21bbbc2965487a418f89e5ff9fef02f2ad5722cbfb0bf0cbb3c1&');

        interaction.reply({
          content: `*${invoker.toString()} ties up ${userToTieup.toString()}*`,
          embeds: [tieupEmbed],
        });
      }
      else {
        interaction.reply(`${userToTieup.toString()} Why do you wanna tie yourself up mate?\n||*please tie me up instead~~!*||`);
      }
      break;
    default:
      break;
  }
});


// STARTS THE BOT WITH THE AUTHENICATED IN (.env) TOKEN


client.login(process.env.TOKEN);
