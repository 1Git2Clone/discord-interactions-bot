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

const pengooQuotes = [
  "hu tao is fucking cute i cant",
  "# yes",
  "https://media.discordapp.net/stickers/1181980659825262662.webp?size=160", // "its pengover",
  "ah-",
  "LISSEN",
  "sweet dreams",
  `Yo rizz me up? Umm, okay, I assume you meant to say "Tie me up" right? Uhm, well, I'm really not sure about that but-`,
  "WAIT I LOVE HOW GETTING TIED UP IS ACTUALLY MY WHOLE PERSONALITY NOW LOL"
]
const pengooHugs = [
  "https://cdn.discordapp.com/attachments/614790390020833280/1183462503364186112/hug.gif?ex=65886c58&is=6575f758&hm=275d61937ad2b529274870ad670319c4f978513f9442e19e74e698ca7fb88448&",
  "https://cdn.discordapp.com/attachments/614790390020833280/1183462503011844096/anime-hug-anime-hugging.gif?ex=65886c58&is=6575f758&hm=a4138a57846d2ceeb75110e622353ce7506bf7f624d6a5f061e54dcefceb647b&",
  "https://cdn.discordapp.com/attachments/614790390020833280/1183462502630174740/hug-surprise-chuunibyou.gif?ex=65886c58&is=6575f758&hm=311ad33b7ca80fe4a352a725b49ba29968ea17713d83b4292b2af0b64ee789f7&"
]
const pengooPats = [
  "https://cdn.discordapp.com/attachments/614790390020833280/1183461602700316673/kanna-kamui-pat.gif?ex=65886b81&is=6575f681&hm=db97fec641c2d019b14696ef63ec2f66f01e56f47645c6200cefbf73b788b43b&",
  "https://cdn.discordapp.com/attachments/614790390020833280/1183461632718950460/pat.gif?ex=65886b88&is=6575f688&hm=b7b9d42ed41507c586fee897ca362b075f5fb1ea976ed7ce259a69cb24c71f4e&",
  "https://cdn.discordapp.com/attachments/614790390020833280/1183461661181497364/mai-sakurajima.gif?ex=65886b8f&is=6575f68f&hm=bd9a84bd007425cbf785bd28183c2ed32c2da97a254dc944f13e4e6b0b84bf63&",
  "https://cdn.discordapp.com/attachments/614790390020833280/1183493730339139694/hu-tao-hug.gif?ex=6588896d&is=6576146d&hm=f90650df440c5b14a3f965b8448a91f393539739dfdfb98bcceb956b384dd029&"
]
  


// ALL COMMANDS



// MESSAGE COMMANDS (ADAPTATION FOR SLASH COMMANDS - NOT USING)


client.on('messageCreate', (message) => {
  if(message.author.bot) {
    return;
  }
  
  /*
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
  */
 

  // Declare userToInteract for the entire scope of messageCreate
  const userToInteract = message.mentions.users.first();
  const invoker = message.author;

  // Command for tying up a user
  if ( (message.content.toLowerCase() === '!tieup' && userToInteract) && message.member) {
    if (invoker !== userToInteract) {
      const tieupEmbed = new EmbedBuilder()
        .setColor('#ff6d66')
        .setImage('https://cdn.discordapp.com/attachments/614790390020833280/1183349571468918814/tied-up-aiura.gif?ex=6588032b&is=65758e2b&hm=b92c39af90ca21bbbc2965487a418f89e5ff9fef02f2ad5722cbfb0bf0cbb3c1&');

      message.channel.send({
        content: `*${invoker.toString()} ties up ${userToInteract.toString()}*`,
        embeds: [tieupEmbed],
      });
    } else {
      message.channel.send(`${userToInteract.toString()} Why do you wanna tie yourself up mate?\n||*please tie me up instead~~!*||`);
    }
    return;
  }

  // Command for hugging a user
  if ( (message.content.toLowerCase() === '!hug' && userToInteract) && message.member) {
    const randomHugIndex = Math.floor(Math.random() * pengooHugs.length);
    const randomHugGIF = pengooHugs[randomHugIndex];

    const hugEmbed = new EmbedBuilder()
    .setColor('#ff6d66')
    .setImage(`${randomHugGIF}`);

    message.channel.send({
      content: `*${invoker.toString()} hugs ${userToInteract.toString()}*`,
      embeds: [hugEmbed],
    });
    return;
  }

  // Command for patting a user
  if ( (message.content.toLowerCase() === '!pat' && userToInteract) && message.member) {
    const randomPatIndex = Math.floor(Math.random() * pengooPats.length);
    const randomPatGIF = pengooPats[randomPatIndex];

    const patEmbed = new EmbedBuilder()
    .setColor('#ff6d66')
    .setImage(`${randomPatGIF}`);

    message.channel.send({
      content: `*${invoker.toString()} pats ${userToInteract.toString()}*`,
      embeds: [patEmbed],
    });
    return;
  }
  
})


// SLASH COMMANDS (USING)

client.on('interactionCreate', async (interaction) => {
  if(!interaction.isChatInputCommand()) return;

  
  
  const userToInteract = interaction.options.getUser('user');
  const invoker = interaction.user;

  switch(interaction.commandName) {
    case 'quote':
      const index = interaction.options.getInteger('quote_number') - 1;

      const randomIndex = ( index >= 0 && (index < pengooQuotes.length - 1) ) ? (index) : ( Math.floor(Math.random() * pengooQuotes.length) );

      const selectedQuote = pengooQuotes[randomIndex];

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
      const tieupEmbed = new EmbedBuilder()
      .setColor('#ff6d66')
      .setImage('https://cdn.discordapp.com/attachments/614790390020833280/1183349571468918814/tied-up-aiura.gif?ex=6588032b&is=65758e2b&hm=b92c39af90ca21bbbc2965487a418f89e5ff9fef02f2ad5722cbfb0bf0cbb3c1&');

      if (userToInteract && invoker !== userToInteract) {
        interaction.reply({
          content: `*${invoker.toString()} ties up ${userToInteract.toString()}*`,
          embeds: [tieupEmbed],
        });
      }
      else {
        interaction.reply(`${userToInteract.toString()} Why do you wanna tie yourself up mate?\n||*please tie me up instead~~!*||`);
      }
      break;
      case 'hug':
      const randomHugIndex = Math.floor(Math.random() * pengooHugs.length);
      const randomHugGIF = pengooHugs[randomHugIndex];

      const hugEmbed = new EmbedBuilder()
      .setColor('#ff6d66')
      .setImage(`${randomHugGIF}`);

      if (userToInteract && invoker !== userToInteract) {
        interaction.reply({
          content: `*${invoker.toString()} hugs ${userToInteract.toString()}*`,
          embeds: [hugEmbed],
        });
      }
      else {
        interaction.reply({
          content: `*${invoker.toString()} hugs himself...* (:sob:)`,
          embeds: [hugEmbed],
        });
      }
      break;
      case 'pat':
      const randomPatIndex = Math.floor(Math.random() * pengooPats.length);
      const randomPatGIF = pengooPats[randomPatIndex];
      
      const patEmbed = new EmbedBuilder()
      .setColor('#ff6d66')
      .setImage(`${randomPatGIF}`);
      if (userToInteract && invoker !== userToInteract) {
        interaction.reply({
          content: `*${invoker.toString()} pats ${userToInteract.toString()}*`,
          embeds: [patEmbed],
        });
      }
      else {
        interaction.reply({
          content: `How does one even pat themselves??`,
        });
      }
      break;
    default:
      break;
  }
});


// STARTS THE BOT WITH THE AUTHENICATED IN (.env) TOKEN


client.login(process.env.TOKEN);
