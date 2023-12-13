/* discord-interactions-bot/src/slashCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/)
// DATE:         12.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

require('dotenv').config(); // CHECK README.md
require('./functions')
import { Message, User, EmbedBuilder, CommandInteraction } from 'discord.js';
import { getRandomEmbedElementFromArray } from "./functions";


// ! SLASH COMMANDS !


// !! HELP COMMAND !!

async function slashHelpCommand(
  interaction: CommandInteraction,
  commandListHeading: string,
  commandList: string[]
  ): Promise<void> {
  await interaction.reply({
  content:`${commandListHeading}${commandList}`,
  ephemeral: true,
  });
}

// !! END OF HELP COMMAND !!


// Quote command. Used a different random index picker because i dont reuse this exact code archetype yet to make it a seperate function.
async function slashQuoteCommand(
  interaction: CommandInteraction,
  quoteArray: string[]
  ): Promise<void> {
  const index = interaction.options.getInteger('quote_number') - 1; // It still works *shrugs*

  const randomIndex = ( index >= 0 && (index <= quoteArray.length - 1) ) ? (index) : ( Math.floor(Math.random() * quoteArray.length) );

  const selectedQuote = quoteArray[randomIndex];

  await interaction.reply(`${selectedQuote}`);
}


// Lists out all available quotes, "ephemeral" means only visible to the invoicer (https://discordjs.guide/slash-commands/response-methods#ephemeral-responses)
async function slashQuotelistCommand(
  interaction: CommandInteraction,
  quoteListHeading: string,
  quoteList: string[]
  ): Promise<void> {
  await interaction.reply({
  content: `${quoteListHeading}${quoteList}`,
  ephemeral: true,
  });
}


// Slash command for tying up the user (analogous to !tieup)
async function slashTieupCommand(
  interaction: CommandInteraction,
  tieupArray: string[],
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (invoker !== userToInteract) {
    const tieupEmbed = getRandomEmbedElementFromArray(tieupArray);

    await interaction.reply({
      content: `*${invoker.toString()} ties up ${userToInteract.toString()}*`,
      embeds: [tieupEmbed],
      ephemeral: false, // Set ephemeral to true if you want the response to be visible only to the user who triggered the command
    });
  } else {
    await interaction.reply({
      content: `${userToInteract.toString()} Why do you wanna tie yourself up mate?\n||*please tie me up instead~~!*||`,
      ephemeral: false,
    });
  }
}


// Slash command for hugging the user (analogous to !hug)
async function slashHugCommand(
  interaction: CommandInteraction,
  hugArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
  const hugEmbed = getRandomEmbedElementFromArray(hugArray);

  if (userToInteract && invoker !== userToInteract) {
    await interaction.reply({
      content: `*${invoker.toString()} hugs ${userToInteract.toString()}*`,
      embeds: [hugEmbed],
    });
  } else {
    await interaction.reply({
      content: `*${invoker.toString()} hugs himself...* (:sob:)`,
      embeds: [hugEmbed],
    });
  }
}


// Slash command for patting the user (analogous to !pat)
async function slashPatCommand(
  interaction: CommandInteraction,
  patArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
  const patEmbed = getRandomEmbedElementFromArray(patArray);

  if (userToInteract && invoker !== userToInteract) {
    await interaction.reply({
      content: `*${invoker.toString()} pats ${userToInteract.toString()}*`,
      embeds: [patEmbed],
    });
  }
  else {
    await interaction.reply({
      content: `How does one even pat themselves?? :sob::sob::sob:`,
    });
  }
}


// Slash command for kissing the user (analogous to !kiss)
async function slashKissCommand(
  interaction: CommandInteraction,
  kissArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
  const kissEmbed = getRandomEmbedElementFromArray(kissArray);

  if (userToInteract && invoker !== userToInteract) {
    await interaction.reply({
      content: `*${invoker.toString()} kisses ${userToInteract.toString()}*`,
      embeds: [kissEmbed],
    });
  }
  else {
    await interaction.reply({
      content: `I'm sorry... :sob:`,
    });
  }
}


// Slash command for slapping the user (analogous to !slap)
async function slashSlapCommand(
  interaction: CommandInteraction,
  slapArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
  const slapEmbed = getRandomEmbedElementFromArray(slapArray);

  if (userToInteract && invoker !== userToInteract) {
    await interaction.reply({
      content: `*${invoker.toString()} slaps ${userToInteract.toString()}*`,
      embeds: [slapEmbed],
    });
  }
  else {
    await interaction.reply({
      content: `Please don't slap yourself! :sob:`,
    });
  }
}


// Slash command for punching the user (analogous to !punch)
async function slashPunchCommand(
  interaction: CommandInteraction,
  punchArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
  const punchEmbed = getRandomEmbedElementFromArray(punchArray);

  if (userToInteract && invoker !== userToInteract) {
    await interaction.reply({
      content: `*${invoker.toString()} punches ${userToInteract.toString()}*`,
      embeds: [punchEmbed],
    });
  }
  else {
    await interaction.reply({
      content: `Please don't punch yourself! :sob:`,
    });
  }
}


// Slash command for bonking the user (analogous to !bonk)
async function slashBonkCommand(
  interaction: CommandInteraction,
  bonkArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
  const bonkEmbed = getRandomEmbedElementFromArray(bonkArray);

  if (userToInteract && invoker !== userToInteract) {
    await interaction.reply({
      content: `*${invoker.toString()} punches ${userToInteract.toString()}*`,
      embeds: [bonkEmbed],
    });
  }
  else {
    await interaction.reply({
      content: `*${invoker.toString()} bonks themselves*`,
      embeds: [bonkEmbed],
    });
  }
}



// ! EXPORTING FUNCTIONS !



module.exports = {
  slashHelpCommand,
  slashQuoteCommand,
  slashQuotelistCommand,
  slashTieupCommand,
  slashHugCommand,
  slashPatCommand,
  slashKissCommand,
  slashSlapCommand,
  slashPunchCommand,
  slashBonkCommand,
}