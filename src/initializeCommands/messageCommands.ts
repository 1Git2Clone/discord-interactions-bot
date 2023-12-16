/* discord-interactions-bot/src/initializeCommands/messageCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         14.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

require('../utils/functions')
import { Message, User, EmbedBuilder } from 'discord.js';
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

  await message.channel.send({
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
  buryMessageCommand,
}