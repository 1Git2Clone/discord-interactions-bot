/* discord-interactions-bot/src/messageCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/)
// DATE:         12.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

require('./functions')
import { Message, User, EmbedBuilder } from 'discord.js';
import { getRandomEmbedElementFromArray } from "./functions";


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
  const randomIndex = Math.floor(Math.random() * quoteArray.length);
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
    content: `${quoteListHeading}${quoteList}`,});
}
  

// Command for tying up a user
async function tieupMessageCommand(
  message: Message,
  tieupArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
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
  const hugEmbed = getRandomEmbedElementFromArray(hugArray);

  await message.channel.send({
    content: `*${invoker.toString()} hugs ${userToInteract.toString()}*`,
    embeds: [hugEmbed],
  });
}
  

// Command for patting a user
async function patMessageCommand(
  message: Message,
  patArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  const patEmbed = getRandomEmbedElementFromArray(patArray);

  await message.channel.send({
    content: `*${invoker.toString()} pats ${userToInteract.toString()}*`,
    embeds: [patEmbed],
  });
}
  

// Command for kissing a user
async function kissMessageCommand(
  message: Message,
  kissArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  const kissEmbed = getRandomEmbedElementFromArray(kissArray);

  await message.channel.send({
    content: `*${invoker.toString()} kisses ${userToInteract.toString()}*`,
    embeds: [kissEmbed],
  });
}

// Command for slapping a user
async function slapMessageCommand(
  message: Message,
  slapArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  const slapEmbed = getRandomEmbedElementFromArray(slapArray);

  await message.channel.send({
    content: `*${invoker.toString()} slaps ${userToInteract.toString()}*`,
    embeds: [slapEmbed],
  });
}

// Command for punching a user
async function punchMessageCommand(
  message: Message,
  punchArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  const punchEmbed = getRandomEmbedElementFromArray(punchArray);

  await message.channel.send({
    content: `*${invoker.toString()} punches ${userToInteract.toString()}*`,
    embeds: [punchEmbed],
  });
}

// Command for bonking a user
async function bonkMessageCommand(
  message: Message,
  bonkArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  const bonkEmbed = getRandomEmbedElementFromArray(bonkArray);

  await message.channel.send({
    content: `*${invoker.toString()} bonks ${userToInteract.toString()}*`,
    embeds: [bonkEmbed],
  });
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
  bonkMessageCommand
}