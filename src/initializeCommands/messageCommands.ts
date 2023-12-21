/* discord-interactions-bot/src/initializeCommands/messageCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         14.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)


require('dotenv').config(); // CHECK README.md
require('../utils/functions')
import { Message, User, EmbedBuilder, CommandInteraction, AttachmentBuilder, FetchMemberOptions, FetchMembersOptions, UserResolvable } from 'discord.js';
import { getRandomEmbedElementFromArray, getQuoteIndexMessageCommand } from "../utils/functions";


// ! MESSAGE COMMANDS !


// !! HELP COMMAND !!

async function helpMessageCommand(
  message: Message,
  commandListHeading: string,
  commandList: string[]
  ): Promise<void> {
  await message.channel.send({
    content: `${commandListHeading}${commandList}`,
  });
}

// !! END OF HELP COMMAND !!


// Command for printing out a random quote
async function quoteMessageCommand(
  message: Message,
  quoteArray: string[]
  ): Promise<void> {
  // function handles !quote 1 2 3 by getting the first int and ignoring the rest...
  // also if you throw words and numbers recklessly it will just give you a random index,
  // even if the first seperated number you've given is correct... *real skill issue from me*
  const index = getQuoteIndexMessageCommand(message, quoteArray);

  const randomIndex = ( index != undefined && !isNaN(index) && index >= 0 && ( index <= quoteArray.length - 1 ) )
  ? (index)
  : ( Math.floor(Math.random() * quoteArray.length) );

  const selectedQuote = quoteArray[randomIndex];
  
  await message.channel.send(selectedQuote);
}
  

// Command for printing out the list of quotes
async function quotelistMessageCommand(
  message: Message,
  quoteListHeading: string,
  quoteList: string[]
  ): Promise<void> {
  await message.channel.send({
    content: `${quoteListHeading}${quoteList}`,
  });
}
  

// Command for tying up a user
async function tieupMessageCommand(
  message: Message,
  tieupArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }
  if (invoker !== userToInteract) {
    const tieupEmbed = getRandomEmbedElementFromArray(tieupArray)
    await message.channel.send({
      content: `*${invoker.toString()} ties up ${userToInteract.toString()}*`,
      embeds: [tieupEmbed],
    });
  } else {
    await message.channel.send(`${userToInteract.toString()} Why do you wanna tie yourself up mate?\n||*please tie me up instead~~!*||`);
  }
}
  

// Command for hugging a user
async function hugMessageCommand(
  message: Message,
  hugArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }

  const hugEmbed = getRandomEmbedElementFromArray(hugArray);

  if (userToInteract && invoker !== userToInteract) {
    await message.reply({
      content: `*${invoker.toString()} hugs ${userToInteract.toString()}*`,
      embeds: [hugEmbed],
    });
  } else {
    await message.reply({
      content: `*${invoker.toString()} hugs himself...* (:sob:)`,
      embeds: [hugEmbed],
    });
  }
}
  

// Command for patting a user
async function patMessageCommand(
  message: Message,
  patArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }

  if (userToInteract && invoker !== userToInteract) {
    const patEmbed = getRandomEmbedElementFromArray(patArray);
    await message.reply({
      content: `*${invoker.toString()} pats ${userToInteract.toString()}*`,
      embeds: [patEmbed],
    });
  }
  else {
    await message.reply({
      content: `How does one even pat themselves?? :sob::sob::sob:`,
    });
  }
}
  

// Command for kissing a user
async function kissMessageCommand(
  message: Message,
  kissArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }

  if (userToInteract && invoker !== userToInteract) {
    const kissEmbed = getRandomEmbedElementFromArray(kissArray);
    await message.reply({
      content: `*${invoker.toString()} kisses ${userToInteract.toString()}*`,
      embeds: [kissEmbed],
    });
  }
  else {
    await message.reply({
      content: `I'm sorry... :sob:`,
    });
  }
}

// Command for slapping a user
async function slapMessageCommand(
  message: Message,
  slapArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }

  if (userToInteract && invoker !== userToInteract) {
    const slapEmbed = getRandomEmbedElementFromArray(slapArray);
    await message.reply({
      content: `*${invoker.toString()} slaps ${userToInteract.toString()}*`,
      embeds: [slapEmbed],
    });
  }
  else {
    await message.reply({
      content: `Please don't slap yourself! :sob:`,
    });
  }
}

// Command for punching a user
async function punchMessageCommand(
  message: Message,
  punchArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }

  if (userToInteract && invoker !== userToInteract) {
    const punchEmbed = getRandomEmbedElementFromArray(punchArray);
    await message.reply({
      content: `*${invoker.toString()} punches ${userToInteract.toString()}*`,
      embeds: [punchEmbed],
    });
  }
  else {
    await message.reply({
      content: `Please don't punch yourself! :sob:`,
    });
  }
}

// Command for bonking a user
async function bonkMessageCommand(
  message: Message,
  bonkArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }

  const bonkEmbed = getRandomEmbedElementFromArray(bonkArray);

  if (userToInteract && invoker !== userToInteract) {
    await message.reply({
      content: `*${invoker.toString()} bonks ${userToInteract.toString()}*`,
      embeds: [bonkEmbed],
    });
  }
  else {
    await message.reply({
      content: `*${invoker.toString()} bonks themselves*`,
      embeds: [bonkEmbed],
    });
  }
}

// Command for sending a random Ryan Gosling GIF
async function driveMessageCommand(
  message: Message,
  driveArray: string[]
): Promise<void> {
  const driveEmbed = getRandomEmbedElementFromArray(driveArray);

  await message.reply({
    embeds: [driveEmbed],
  });
}

async function nomMessageCommand(
  message: Message,
  nomArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }

  const nomEmbed = getRandomEmbedElementFromArray(nomArray);

  if (userToInteract && invoker !== userToInteract) {
    await message.reply({
      content: `*${invoker.toString()} noms ${userToInteract.toString()}*`,
      embeds: [nomEmbed],
    });
  }
  else {
    await message.reply({
      content: `*${invoker.toString()}. Why do you wanna eat yourself?*`,
      embeds: [nomEmbed],
    });
  }
}

// Command for killing a user
async function killMessageCommand(
  message: Message,
  killArray: string[],
  slapArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }

  if (userToInteract && invoker !== userToInteract) {
    const killEmbed = getRandomEmbedElementFromArray(killArray);
    await message.reply({
      content: `*${invoker.toString()} kills ${userToInteract.toString()}*`,
      embeds: [killEmbed],
    });
  }
  else {
    const slapEmbed = getRandomEmbedElementFromArray(slapArray);
    await message.reply({
      content: `NOO! DON'T DO THATTT!`,
      embeds: [slapEmbed],
    });
  }
}

// Command for kicking a user
async function kickMessageCommand(
  message: Message,
  kickArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }
  const kickEmbed = getRandomEmbedElementFromArray(kickArray);

  if (userToInteract && invoker !== userToInteract) {
    await message.reply({
      content: `*${invoker.toString()} kicks ${userToInteract.toString()}*`,
      embeds: [kickEmbed],
    });
  }
  else {
    await message.reply({
      content: `Are you into that?`,
      embeds: [kickEmbed],
    });
  }
}

// Command for displaying the user's level
const Level = require('../models/level')
const calculateLevelXp = require('../utils/calculateLevelXp')
import canvacord from 'canvacord';
async function levelMessageCommand(
  message: CommandInteraction,
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!message.inGuild()) {
    message.reply('You can only run this command inside a server.');
    return;
  }

  const mentionedUserId = userToInteract ? userToInteract.id : invoker.id;
  const targetUserId = mentionedUserId || message.user.id;
  // @ts-ignore
  const targetUserObj = await message.guild.members.fetch(targetUserId);

  const fetchedLevel = await Level.findOne({
    userId: targetUserId,
    // @ts-ignore
    guildId: message.guild.id,
  });

  if (!fetchedLevel) {
    message.reply(
      mentionedUserId
        ? `${targetUserObj.user.tag} doesn't have any levels yet. Try again when they chat a little more.`
        : "You don't have any levels yet. Chat a little more and try again."
    );
    return;
  }
  // @ts-ignore
  let allLevels = await Level.find({ guildId: message.guild.id }).select(
    '-_id userId level xp'
  );

  allLevels.sort((a: { level: number; xp: number; }, b: { level: number; xp: number; }) => {
    if (a.level === b.level) {
      return b.xp - a.xp;
    } else {
      return b.level - a.level;
    }
  });

  let currentRank = allLevels.findIndex((lvl: { userId: string | number | boolean; }) => lvl.userId === targetUserId) + 1;

  const rank = new canvacord.Rank()
    .setAvatar(targetUserObj.user.displayAvatarURL({ size: 256 }))
    .setRank(currentRank)
    .setLevel(fetchedLevel.level)
    .setCurrentXP(fetchedLevel.xp)
    .setRequiredXP(calculateLevelXp(fetchedLevel.level))
    .setProgressBar('#FFC300', 'COLOR')
    .setUsername(targetUserObj.user.username)

  const data = await rank.build();
  const attachment = new AttachmentBuilder(data);
  await message.reply({ files: [attachment] });

}

// Slash topranks command - I hate that its slow but if it works DON'T touch it!! (https://cdn.discordapp.com/attachments/1180115044218978425/1185692424979353740/IMG_1694.jpg)
import { GuildMember } from 'discord.js';

async function topRanksMessageCommand(
  message: Message,
  ): Promise<void> {
  if (!message.inGuild()) {
    message.reply('You can only run this command inside a server.');
    return;
  }

  try {
    // @ts-ignore message.guild cant be null because of the first if() construction
    const allLevels = await Level.find({ guildId: message.guild.id }).select(
      '-_id userId level xp username'
    );

    allLevels.sort((a: { level: number; xp: number; }, b: { level: number; xp: number; }) => {
      if (a.level === b.level) {
        return b.xp - a.xp;
      } else {
        return b.level - a.level;
      }
    });

    const topRanks = allLevels.slice(0, 9);
    
    const formattedRanks = await Promise.all(
      topRanks.map(async (rank: { userId: UserResolvable; username: any; level: any; xp: any }) => {
        try { // This handling is required if someone from the top 10 has left the guild.
          // @ts-ignore message.guild cant be null because of the first if() construction
          const member = await message.guild.members.fetch(rank.userId);
          const username = member instanceof GuildMember ? member.user.username : rank.username || 'Unknown';
          return `1. | Lvl: ${rank.level} (XP: ${rank.xp}) - ${username}`;
        } catch (error) { // @ts-ignore
          console.error(`Error fetching member with ID ${rank.userId}: ${error.message}`);
          return `1. | Lvl: ${rank.level} (XP: ${rank.xp}) - Unknown`;
        }
      })
    );

    message.reply(`## ***~ Top 9 Yappers ~***\n${formattedRanks.join('\n')}`);
  } catch (error) {
    console.error(`Error fetching top ranks: ${error}`);
    message.reply('An error occurred while fetching top ranks.');
  }
}


// Command for burying a user
async function buryMessageCommand(
  message: Message,
  buryArray: string[],
  selfBuryArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!userToInteract) { message.reply('No user mentioned.'); return; }
  
  if (userToInteract && invoker !== userToInteract) {
    const buryEmbed = getRandomEmbedElementFromArray(buryArray);
    await message.reply({
      content: `*${invoker.toString()} buries ${userToInteract.toString()}*`,
      embeds: [buryEmbed],
    });
  }
  else {
    const selfBuryEmbed = getRandomEmbedElementFromArray(selfBuryArray);
    await message.reply({
      content: `*${invoker.toString()} buries themselves*`,
      embeds: [selfBuryEmbed],
    });
  }
}


// Command for sending a random chair GIF
async function chairMessageCommand(
  message: Message,
  chairArray: string[]
): Promise<void> {
  const chairEmbed = getRandomEmbedElementFromArray(chairArray);

  await message.reply({
    embeds: [chairEmbed],
  });
}

async function responseToGreeting(
  message: Message,
  greetArray: string[],
  botMentionArray: string[]
): Promise<void> {

}

// ! EXPORTING FUNCTIONS !


module.exports = {
  helpMessageCommand,
  quoteMessageCommand,
  quotelistMessageCommand,
  tieupMessageCommand,
  hugMessageCommand,
  patMessageCommand,
  kissMessageCommand,
  slapMessageCommand,
  punchMessageCommand,
  bonkMessageCommand,
  driveMessageCommand,
  nomMessageCommand,
  killMessageCommand,
  kickMessageCommand,
  levelMessageCommand,
  topRanksMessageCommand,
  buryMessageCommand,
  chairMessageCommand,
  responseToGreeting,
}