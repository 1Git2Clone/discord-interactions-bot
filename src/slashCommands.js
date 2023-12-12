// Author:       1Kill2Steal (https://github.com/1Kill2Steal/)
// DATE:         12.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

require('dotenv').config(); // CHECK README.md
const { getRandomEmbedElementFromArray } = require('./functions')



// ! SLASH COMMANDS !


// !! HELP COMMAND !!

function slashHelpCommand(interaction, commandListHeading, commandList){
  return interaction.reply({
  content:`${commandListHeading}${commandList}`,
  ephemeral: true,
  });
}

// !! END OF HELP COMMAND !!


// Quote command. Used a different random index picker because i dont reuse this exact code archetype yet to make it a seperate function.
async function slashQuoteCommand(interaction, quoteArray){
  const index = interaction.options.getInteger('quote_number') - 1;

  const randomIndex = ( index >= 0 && (index <= quoteArray.length - 1) ) ? (index) : ( Math.floor(Math.random() * quoteArray.length) );

  const selectedQuote = quoteArray[randomIndex];

  return interaction.reply(`${selectedQuote}`);
}


// Lists out all available quotes, "ephemeral" means only visible to the invoicer (https://discordjs.guide/slash-commands/response-methods#ephemeral-responses)
async function slashQuotelistCommand(interaction, quoteListHeading, quoteList){
  return interaction.reply({
  content: `${quoteListHeading}${quoteList}`,
  ephemeral: true,
  });
}


// Slash command for tying up the user (analogous to !tieup)
async function slashTieupCommand(interaction, tieupArray, invoker, userToInteract){
  const tieupEmbed = getRandomEmbedElementFromArray(tieupArray)
  if (userToInteract && invoker !== userToInteract) {
    return interaction.reply({
    content: `*${invoker.toString()} ties up ${userToInteract.toString()}*`,
    embeds: [tieupEmbed],
  });
  } else {
    return interaction.reply(`${userToInteract.toString()} Why do you wanna tie yourself up mate?\n||*please tie me up instead~~!*||`);
  }
}


// Slash command for hugging the user (analogous to !hug)
async function slashHugCommand(interaction, hugArray, invoker, userToInteract){
  const hugEmbed = getRandomEmbedElementFromArray(hugArray);

  if (userToInteract && invoker !== userToInteract) {
    return interaction.reply({
      content: `*${invoker.toString()} hugs ${userToInteract.toString()}*`,
      embeds: [hugEmbed],
    });
  } else {
    return interaction.reply({
      content: `*${invoker.toString()} hugs himself...* (:sob:)`,
      embeds: [hugEmbed],
    });
  }
}


// Slash command for patting the user (analogous to !pat)
async function slashPatCommand(interaction, patArray, invoker, userToInteract){
  const patEmbed = getRandomEmbedElementFromArray(patArray);

  if (userToInteract && invoker !== userToInteract) {
    return interaction.reply({
      content: `*${invoker.toString()} pats ${userToInteract.toString()}*`,
      embeds: [patEmbed],
    });
  }
  else {
    return interaction.reply({
      content: `How does one even pat themselves?? :sob::sob::sob:`,
    });
  }
}


// Slash command for kissing the user (analogous to !kiss)
async function slashKissCommand(interaction, kissArray, invoker, userToInteract){
  const kissEmbed = getRandomEmbedElementFromArray(kissArray);

  if (userToInteract && invoker !== userToInteract) {
    return interaction.reply({
      content: `*${invoker.toString()} kisses ${userToInteract.toString()}*`,
      embeds: [kissEmbed],
    });
  }
  else {
    return interaction.reply({
      content: `I'm sorry... :sob:`,
    });
  }
}


// Slash command for slapping the user (analogous to !slap)
async function slashSlapCommand(interaction, slapArray, invoker, userToInteract){
  const slapEmbed = getRandomEmbedElementFromArray(slapArray);

  if (userToInteract && invoker !== userToInteract) {
    return interaction.reply({
      content: `*${invoker.toString()} slaps ${userToInteract.toString()}*`,
      embeds: [slapEmbed],
    });
  }
  else {
    return interaction.reply({
      content: `Please don't slap yourself! :sob:`,
    });
  }
}


// Slash command for punching the user (analogous to !punch)
async function slashPunchCommand(interaction, punchArray, invoker, userToInteract){
  const punchEmbed = getRandomEmbedElementFromArray(punchArray);

  if (userToInteract && invoker !== userToInteract) {
    return interaction.reply({
      content: `*${invoker.toString()} punches ${userToInteract.toString()}*`,
      embeds: [punchEmbed],
    });
  }
  else {
    return interaction.reply({
      content: `Please don't punch yourself! :sob:`,
    });
  }
}


// Slash command for bonking the user (analogous to !bonk)
async function slashBonkCommand(interaction, bonkArray, invoker, userToInteract){
  const bonkEmbed = getRandomEmbedElementFromArray(bonkArray);

  if (userToInteract && invoker !== userToInteract) {
    return interaction.reply({
      content: `*${invoker.toString()} punches ${userToInteract.toString()}*`,
      embeds: [bonkEmbed],
    });
  }
  else {
    return interaction.reply({
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