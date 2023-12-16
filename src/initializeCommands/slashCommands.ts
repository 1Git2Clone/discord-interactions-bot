/* discord-interactions-bot/src/initializeCommands/slashCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         14.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

require('dotenv').config(); // CHECK README.md
require('../utils/functions')
import { Message, User, EmbedBuilder, CommandInteraction, AttachmentBuilder, FetchMemberOptions, FetchMembersOptions, UserResolvable } from 'discord.js';
import { getRandomEmbedElementFromArray } from "../utils/functions";


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
    });
  } else {
    await interaction.reply({
      content: `${userToInteract.toString()} Why do you wanna tie yourself up mate?\n||*please tie me up instead~~!*||`,
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
  if (userToInteract && invoker !== userToInteract) {
    const patEmbed = getRandomEmbedElementFromArray(patArray);
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
  if (userToInteract && invoker !== userToInteract) {
    const kissEmbed = getRandomEmbedElementFromArray(kissArray);
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
  if (userToInteract && invoker !== userToInteract) {
    const slapEmbed = getRandomEmbedElementFromArray(slapArray);
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
  if (userToInteract && invoker !== userToInteract) {
    const punchEmbed = getRandomEmbedElementFromArray(punchArray);
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
      content: `*${invoker.toString()} bonks ${userToInteract.toString()}*`,
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

// Slash command for sending a Ryan Gosling gif
async function slashDriveCommand(
  interaction: CommandInteraction,
  driveArray: string[],
  ): Promise<void> {
  const driveEmbed = getRandomEmbedElementFromArray(driveArray);
  await interaction.reply({
    embeds: [driveEmbed],
  });
}

// Slash command for nomming/eating a user
async function slashNomCommand(
  interaction: CommandInteraction,
  nomArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
  const nomEmbed = getRandomEmbedElementFromArray(nomArray);

  if (userToInteract && invoker !== userToInteract) {
    await interaction.reply({
      content: `*${invoker.toString()} noms ${userToInteract.toString()}*`,
      embeds: [nomEmbed],
    });
  }
  else {
    await interaction.reply({
      content: `*${invoker.toString()}. Why do you wanna eat yourself?*`,
      embeds: [nomEmbed],
    });
  }
}

// Slash command for killing a user
async function slashKillCommand(
  interaction: CommandInteraction,
  killArray: string[],
  slapArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
  if (userToInteract && invoker !== userToInteract) {
    const killEmbed = getRandomEmbedElementFromArray(killArray);
    await interaction.reply({
      content: `*${invoker.toString()} kills ${userToInteract.toString()}*`,
      embeds: [killEmbed],
    });
  }
  else {
    const slapEmbed = getRandomEmbedElementFromArray(slapArray);
    await interaction.reply({
      content: `NOO! DON'T DO THATTT!`,
      embeds: [slapEmbed],
    });
  }
}

// Slash command for kicking a user
async function slashKickCommand(
  interaction: CommandInteraction,
  kickArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
    const kickEmbed = getRandomEmbedElementFromArray(kickArray);
  if (userToInteract && invoker !== userToInteract) {
    await interaction.reply({
      content: `*${invoker.toString()} kicks ${userToInteract.toString()}*`,
      embeds: [kickEmbed],
    });
  }
  else {
    await interaction.reply({
      content: `Are you into that?`,
      embeds: [kickEmbed],
    });
  }
}

const Level = require('../models/level')
const calculateLevelXp = require('../utils/calculateLevelXp')
import canvacord from 'canvacord';
async function slashLevelCommand(
  interaction: CommandInteraction,
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
    .setProgressBar('#FFC300', 'COLOR')
    .setUsername(targetUserObj.user.username)

  const data = await rank.build();
  const attachment = new AttachmentBuilder(data);
  await interaction.editReply({ files: [attachment] });

}


// Slash topranks command - I hate that its slow but if it works DON'T touch it!!
import { GuildMember } from 'discord.js';

async function slashTopRanksCommand(interaction: CommandInteraction): Promise<void> {
  if (!interaction.inGuild()) {
    interaction.reply('You can only run this command inside a server.');
    return;
  }

  await interaction.deferReply();

  try {
    // @ts-ignore interaction.guild cant be null because of the first if() construction
    const allLevels = await Level.find({ guildId: interaction.guild.id }).select(
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
      topRanks.map(async (rank: { userId: UserResolvable; username: any; level: any; xp: any }, index: number) => {
        try { // This handling is required if someone from the top 10 has left the guild.
          // @ts-ignore interaction.guild cant be null because of the first if() construction
          const member = await interaction.guild.members.fetch(rank.userId);
          const username = member instanceof GuildMember ? member.user.username : rank.username || 'Unknown';
          return `**${(index + 1)}** | Lvl: ${rank.level} (XP: ${rank.xp}) - ${username}`;
        } catch (error) { // @ts-ignore
          console.error(`Error fetching member with ID ${rank.userId}: ${error.message}`);
          return `**${(index + 1)}** | Lvl: ${rank.level} (XP: ${rank.xp}) - Unknown`;
        }
      })
    );

    interaction.editReply(`## ***~ Top 9 Yappers ~***\n${formattedRanks.join('\n')}`);
  } catch (error) {
    console.error(`Error fetching top ranks: ${error}`);
    interaction.editReply('An error occurred while fetching top ranks.');
  }
}


/*
const embed = new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle(`*** ~ TOP 10 RANKS ~ ***`)
      .setURL('https://www.youtube.com/@nopengoo')
      .setThumbnail('https://media.discordapp.net/attachments/614790390020833280/1185596132420767895/33d3cf9b1ca93f1a77994e798974ac83aa.png?&format=webp&quality=lossless')
      .addFields(formattedRanks)
      .setTimestamp()
      .setFooter({ text: 'KEEP ON YAPPING!', iconURL: 'https://media.discordapp.net/attachments/614790390020833280/1185596132420767895/33d3cf9b1ca93f1a77994e798974ac83aa.png?ex=65902f71&is=657dba71&hm=19f028d389b8b686e6a6a655493e847fd77822b2f6a3ea7790f389b4985625c9&=&format=webp&quality=lossless' });
*/

// Slash command for burying a user
async function slashBuryCommand(
  interaction: CommandInteraction,
  buryArray: string[],
  selfBuryArray: string[],
  invoker: User,
  userToInteract: User
  ): Promise<void> {
  if (userToInteract && invoker !== userToInteract) {
    const buryEmbed = getRandomEmbedElementFromArray(buryArray);
    await interaction.reply({
      content: `*${invoker.toString()} buries ${userToInteract.toString()}*`,
      embeds: [buryEmbed],
    });
  }
  else {
    const selfBuryEmbed = getRandomEmbedElementFromArray(selfBuryArray);
    await interaction.reply({
      content: `*${invoker.toString()} buries themselves*`,
      embeds: [selfBuryEmbed],
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
  slashDriveCommand,
  slashNomCommand,
  slashKillCommand,
  slashKickCommand,
  slashLevelCommand,
  slashTopRanksCommand,
  slashBuryCommand,
}