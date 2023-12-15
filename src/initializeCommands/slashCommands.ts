/* discord-interactions-bot/src/initializeCommands/slashCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         14.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

require('dotenv').config(); // CHECK README.md
require('../functions')
import { Message, User, EmbedBuilder, CommandInteraction, AttachmentBuilder } from 'discord.js';
import { getRandomEmbedElementFromArray } from "../functions";


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
    // @ts-ignore
  const index = (interaction.options.getInteger('quote_number') || 0) - 1; // It still works *shrugs*

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


const Level = require('../models/level')
const calculateLevelXp = require('../utils/calculateLevelXp')
import canvacord from 'canvacord';
async function slashLevelCommand(
  interaction: CommandInteraction,
  invoker: User,
  userToInteract: User
): Promise<void> {
  if (!interaction.inGuild()) {
    interaction.reply('You can only run this command inside a server.');
    return;
  }

  await interaction.deferReply();

  const mentionedUserId = interaction.options.get('target-user')?.value;
  const targetUserId = mentionedUserId || interaction.user.id;
  // @ts-ignore
  const targetUserObj = await interaction.guild.members.fetch(targetUserId);

  const fetchedLevel = await Level.findOne({
    userId: targetUserId,
    // @ts-ignore
    guildId: interaction.guild.id,
  });

  if (!fetchedLevel) {
    interaction.editReply(
      mentionedUserId
        ? `${targetUserObj.user.tag} doesn't have any levels yet. Try again when they chat a little more.`
        : "You don't have any levels yet. Chat a little more and try again."
    );
    return;
  }
  // @ts-ignore
  let allLevels = await Level.find({ guildId: interaction.guild.id }).select(
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
    .setProgressBar('#1A000D', 'COLOR')
    .setUsername(targetUserObj.user.username)

  const data = await rank.build();
  const attachment = new AttachmentBuilder(data);
  await interaction.editReply({ files: [attachment] });

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
  slashLevelCommand,
}