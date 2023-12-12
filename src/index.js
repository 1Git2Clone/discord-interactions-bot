require('dotenv').config(); // CHECK README.md

// ASSIGNING INTENTS (https://discordjs.guide/popular-topics/intents.html)

const { Client, IntentsBitField, messageLink, Embed, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// STARTING CLIENT TERMINAL MSG

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
const pengooTieups = [
  "https://cdn.discordapp.com/attachments/614790390020833280/1183349571468918814/tied-up-aiura.gif?ex=6588032b&is=65758e2b&hm=b92c39af90ca21bbbc2965487a418f89e5ff9fef02f2ad5722cbfb0bf0cbb3c1&",
  "https://cdn.discordapp.com/attachments/1180115044218978425/1183694079847059517/ezgif.com-video-to-gif.gif?ex=65894404&is=6576cf04&hm=a5f8a526218dc1d13a2957d6e3405f90cd6de1cc6d3d7e7b27d02108898db347&",
  "https://cdn.discordapp.com/attachments/614790390020833280/1183694247724077056/sasha-blouse.gif?ex=6589442c&is=6576cf2c&hm=63dc677cf5f449483f9f94372bd4d7e241f7aec2b92636e4e906ae22081bf04c&"
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
const pengooKiss = [
  "https://media.discordapp.net/attachments/614790390020833280/1184153815767855234/hutao-kiss.gif?ex=658af02e&is=65787b2e&hm=83a389fd93d6bd7b34a4ae7db2d9e7cfe3f29d819c503cc1e24c05018a070453&=",
  "https://media.discordapp.net/attachments/614790390020833280/1184153816187277462/kiss.gif?ex=658af02e&is=65787b2e&hm=a43bc326b2d410a7bd797f806b7961ffc62ea32d7453f9a8be40fc3d3220ea3f&=",
  "https://media.discordapp.net/attachments/614790390020833280/1184153816644468766/cute-kawai.gif?ex=658af02e&is=65787b2e&hm=685e92a6efc33064088f8862042a1591128722c9ac61d167cefd334ddbcd6ce4&=",
]
const pengooSlap = [
  "https://media.discordapp.net/attachments/614790390020833280/1184154726238007349/genshin-impact-venti.gif?ex=658af107&is=65787c07&hm=610dce3dc84a7149573449cd51000b044b1daf2ba8b64b7547809f619e4cd83b&=",
  "https://media.discordapp.net/attachments/614790390020833280/1184154726670028882/slap.gif?ex=658af107&is=65787c07&hm=a432223a617d6296ef0ea9627a0522d822f5f300d471a2208b38551f70e11395&=",
  "https://media.discordapp.net/attachments/614790390020833280/1184154727286579210/anime-slap-mad.gif?ex=658af107&is=65787c07&hm=a59ed74001222dc70c1bbb40be3311e3bed4405d6469e9416ec3a7af8c344ac0&=",
]
const pengooPunch = [
  "https://media.discordapp.net/attachments/614790390020833280/1184154350172508222/one-punch.gif?ex=658af0ad&is=65787bad&hm=b50f9fd6ac75cb0095182914f6d324c71543d8c6edf4943c71100366d0ca30c7&=",
  "https://media.discordapp.net/attachments/614790390020833280/1184154350575169568/anime-fight.gif?ex=658af0ad&is=65787bad&hm=f3682a7426a04be86716517f519952bcfcd7ce8de3b08e9e3f2b57abc8b7c024&=",
  "https://media.discordapp.net/attachments/614790390020833280/1184154351049113761/anime-smash.gif?ex=658af0ad&is=65787bad&hm=8a7c0dd6a847e099805224c55d42a4b742d8ca7e74731b28d3256d30afd3761a&=",
]
const pengooBonk = [
  "https://media.discordapp.net/attachments/614790390020833280/1184200805738348696/powerful-head-slap.gif?ex=658b1bf1&is=6578a6f1&hm=4690e1ecdfe9cc1a23d77bcc174ec1cf31c32ce9e007d02a024bbe960270f6db&=",
  "https://media.discordapp.net/attachments/614790390020833280/1184200806245879828/atonnic-bonk.gif?ex=658b1bf1&is=6578a6f1&hm=007abbc5c5b7ec6140d752ebe6a1337a6ff461fa09a607539b1226ae984b7c97&=",
  "https://media.discordapp.net/attachments/614790390020833280/1184200806673686608/shinji-shinji-broom.gif?ex=658b1bf1&is=6578a6f1&hm=6d0d271fb33ad7d3e42a70365d7e10460bb219608a20c1093b8c9a9c3bb18ef8&=",
]


// FUNCTIONS TO MAKE THE CODE MODULAR:



function getRandomElementFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];

  const embed = new EmbedBuilder()
  .setColor('#ff6d66')
  .setImage(randomElement);

  return embed;
}



// COMMANDS LIST AS AN ARRAY WITH COMMAND PREFIX FOR CODE MODULARITY



const commandPrefix = "!";

const pengooCommands = [
  {
    name: "help",
    description: "Display help information"
  },
  {
    name: "quote",
    description: "Get a random quote"
  },
  {
    name: "quotelist",
    description: "List all available quotes"
  },
  {
    name: "tieup",
    description: "Tie up a user"
  },
  {
    name: "hug",
    description: "Hug a user"
  },
  {
    name: "pat",
    description: "Pat a user"
  },
  {
    name: "kiss",
    description: "Kiss a user"
  },
  {
    name: "slap",
    description: "Slap a user"
  },
  {
    name: "punch",
    description: "Punch a user"
  },
  {
    name: "bonk",
    description: "Bonk someone who's horni"
  }
]


// prematurely wrapped all the quotes for !quotelist and /quotelist commands
const quoteListHeading = `Here are the available quotes:\n`;
const quoteList = pengooQuotes.map((quote, i) => `**${i+1}:** ${quote}`).join('\n');

//prematurely wrapped all the commands for the !help and /help commands
const commandListHeading =`# ALL ${commandPrefix} COMMANDS ONLY WORK ON MESSAGE REPLIES.\n
  Aka "${commandPrefix}${pengooCommands[3].name}" for example works only by REPLYING to the user and not mentioning them.\n
  In the case where you want to mention someone, please use the Slash (/) commands.\n
  Here's the list of all the available commands:`;
const commandList = pengooCommands.map(command => `**${commandPrefix}${command.name} OR /${command.name}** ${command.description}`).join('\n');



// ALL COMMANDS



// MESSAGE COMMANDS (USER REPLY ONLY ADAPTATION FOR SLASH COMMANDS) (Unfortunately I dont know how do get it to work with "!pat @direct.ping")


client.on('messageCreate', (message) => {
  if(message.author.bot) {
    return;
  }

  // Entire scope of messageCreate so i can reuse it
  const userToInteract = message.mentions.users.first();
  const invoker = message.author;


  // HELP COMMAND



  if (message.content.toLowerCase() === `${commandPrefix}${pengooCommands[0].name}`) {
    message.channel.send({
      content:`${commandListHeading}${commandList}`,
      ephemeral: true,
    });
  }



  // END OF HELP COMMAND



  // Command for printing out a random quote
  if( (message.content.toLowerCase() === `${commandPrefix}${pengooCommands[1].name}`) && message.member) {
    const randomIndex = Math.floor(Math.random() * pengooQuotes.length);
    const selectedQuote = pengooQuotes[randomIndex];
    message.channel.send(selectedQuote);
  }

  // Command for printing out the list of quotes
  if ( (message.content.toLowerCase() === `${commandPrefix}${pengooCommands[2].name}`) && message.member) {
    message.channel.send({
      content: `${quoteListHeading}${quoteList}`,
      ephemeral: true,
    });
    return;
  }

  // Command for tying up a user
  if ( (message.content.toLowerCase() === `${commandPrefix}${pengooCommands[3].name}` && userToInteract) && message.member) {
    if (invoker !== userToInteract) {
      const tieupEmbed = getRandomElementFromArray(pengooTieups)
      

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
  if ( (message.content.toLowerCase() === `${commandPrefix}${pengooCommands[4].name}` && userToInteract) && message.member) {
    const hugEmbed = getRandomElementFromArray(pengooHugs);

    message.channel.send({
      content: `*${invoker.toString()} hugs ${userToInteract.toString()}*`,
      embeds: [hugEmbed],
    });
    return;
  }

  // Command for patting a user
  if ( (message.content.toLowerCase() === `${commandPrefix}${pengooCommands[5].name}` && userToInteract) && message.member) {
    const patEmbed = getRandomElementFromArray(pengooPats);

    message.channel.send({
      content: `*${invoker.toString()} pats ${userToInteract.toString()}*`,
      embeds: [patEmbed],
    });
    return;
  }

  // Command for kissing a user
  if ( (message.content.toLowerCase() === `${commandPrefix}${pengooCommands[6].name}` && userToInteract) && message.member) {
    const kissEmbed = getRandomElementFromArray(pengooKiss);

    message.channel.send({
      content: `*${invoker.toString()} kisses ${userToInteract.toString()}*`,
      embeds: [kissEmbed],
    });
    return;
  }

  // Command for slapping a user
  if ( (message.content.toLowerCase() === `${commandPrefix}${pengooCommands[7].name}` && userToInteract) && message.member) {
    const slapEmbed = getRandomElementFromArray(pengooSlap);

    message.channel.send({
      content: `*${invoker.toString()} slaps ${userToInteract.toString()}*`,
      embeds: [slapEmbed],
    });
    return;
  }

  // Command for punching a user
  if ( (message.content.toLowerCase() === `${commandPrefix}${pengooCommands[8].name}` && userToInteract) && message.member) {
    const punchEmbed = getRandomElementFromArray(pengooPunch);

    message.channel.send({
      content: `*${invoker.toString()} punches ${userToInteract.toString()}*`,
      embeds: [punchEmbed],
    });
    return;
  } 

  // Command for bonking a user
  if ( (message.content.toLowerCase() === `${commandPrefix}${pengooCommands[9].name}` && userToInteract) && message.member) {
    const bonkEmbed = getRandomElementFromArray(pengooBonk);

    message.channel.send({
      content: `*${invoker.toString()} bonks ${userToInteract.toString()}*`,
      embeds: [bonkEmbed],
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

    case `${pengooCommands[0].name}`:
      interaction.reply({
        content:`${commandListHeading}${commandList}`,
        ephemeral: true,
      })
      break;


    // Quote command. Used a different random index picker because i dont reuse this exact code archetype yet to make it a seperate function.

    case `${pengooCommands[1].name}`:
      const index = interaction.options.getInteger('quote_number') - 1;

      const randomIndex = ( index >= 0 && (index <= pengooQuotes.length - 1) ) ? (index) : ( Math.floor(Math.random() * pengooQuotes.length) );

      const selectedQuote = pengooQuotes[randomIndex];

      interaction.reply(`${selectedQuote}`);
      break;

    // Lists out all available quotes, "ephemeral" means only visible to the invoicer (https://discordjs.guide/slash-commands/response-methods#ephemeral-responses)

    case `${pengooCommands[2].name}`:
      interaction.reply({
        content: `${quoteListHeading}${quoteList}`,
        ephemeral: true,
      });
      break;

    // Slash command for tying up the user (analogous to !tieup)

    case `${pengooCommands[3].name}`:
      const tieupEmbed = getRandomElementFromArray(pengooTieups)

      if (userToInteract && invoker !== userToInteract) {
        interaction.reply({
          content: `*${invoker.toString()} ties up ${userToInteract.toString()}*`,
          embeds: [tieupEmbed],
        });
      } else {
        interaction.reply(`${userToInteract.toString()} Why do you wanna tie yourself up mate?\n||*please tie me up instead~~!*||`);
      }
      break;

    // Slash command for hugging the user (analogous to !hug)

    case `${pengooCommands[4].name}`:
      const hugEmbed = getRandomElementFromArray(pengooHugs);

      if (userToInteract && invoker !== userToInteract) {
        interaction.reply({
          content: `*${invoker.toString()} hugs ${userToInteract.toString()}*`,
          embeds: [hugEmbed],
        });
      } else {
        interaction.reply({
          content: `*${invoker.toString()} hugs himself...* (:sob:)`,
          embeds: [hugEmbed],
        });
      }
      break;

    // Slash command for patting the user (analogous to !pat)

      case `${pengooCommands[5].name}`:
      const patEmbed = getRandomElementFromArray(pengooPats);

      if (userToInteract && invoker !== userToInteract) {
        interaction.reply({
          content: `*${invoker.toString()} pats ${userToInteract.toString()}*`,
          embeds: [patEmbed],
        });
      }
      else {
        interaction.reply({
          content: `How does one even pat themselves?? :sob::sob::sob:`,
        });
      }
      break;

    // Slash command for kissing the user (analogous to !kiss)

    case `${pengooCommands[6].name}`:
      const kissEmbed = getRandomElementFromArray(pengooKiss);

      if (userToInteract && invoker !== userToInteract) {
        interaction.reply({
          content: `*${invoker.toString()} kisses ${userToInteract.toString()}*`,
          embeds: [kissEmbed],
        });
      }
      else {
        interaction.reply({
          content: `I'm sorry... :sob:`,
        });
      }
      break;

    // Slash command for slapping the user (analogous to !slap)

    case `${pengooCommands[7].name}`:
      const slapEmbed = getRandomElementFromArray(pengooSlap);

      if (userToInteract && invoker !== userToInteract) {
        interaction.reply({
          content: `*${invoker.toString()} slaps ${userToInteract.toString()}*`,
          embeds: [slapEmbed],
        });
      }
      else {
        interaction.reply({
          content: `Please don't slap yourself! :sob:`,
        });
      }
      break;

    // Slash command for punching the user (analogous to !punch)

    case `${pengooCommands[8].name}`:
      const punchEmbed = getRandomElementFromArray(pengooPunch);

      if (userToInteract && invoker !== userToInteract) {
        interaction.reply({
          content: `*${invoker.toString()} punches ${userToInteract.toString()}*`,
          embeds: [punchEmbed],
        });
      }
      else {
        interaction.reply({
          content: `Please don't punch yourself! :sob:`,
        });
      }
      break;

    case `${pengooCommands[9].name}`:
      const bonkEmbed = getRandomElementFromArray(pengooBonk);

      if (userToInteract && invoker !== userToInteract) {
        interaction.reply({
          content: `*${invoker.toString()} punches ${userToInteract.toString()}*`,
          embeds: [bonkEmbed],
        });
      }
      else {
        interaction.reply({
          content: `*${invoker.toString()} bonks themselves*`,
          embeds: [bonkEmbed],
        });
      }
      break;

    default: // No command case, I dont even think its needed to exist but oh well...
      break; // As a wise man once said: "If it works, DON'T CHANGE IT!!!" :P

  }

});


// STARTS THE BOT WITH THE AUTHENICATED IN (.env) TOKEN


client.login(process.env.TOKEN);