/* discord-interactions-bot/src/processCommands/slashCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         15.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

import { CommandInteraction, User } from "discord.js";
require('../functions')
const slashCommands = require('../initializeCommands/slashCommands'); 
const data = require('../data/data')

module.exports = async (interaction: CommandInteraction, invoker: User) => {
  if(!interaction.isChatInputCommand()) return;

  
  const userToInteract = interaction.options.getUser('user');

  switch(interaction.commandName) {


    // Help command. Gives a small description about the commands and lists all of them.
    case `${data.commandArray[0].name}`:
      slashCommands.slashHelpCommand(interaction, data.commandListHeading, data.commandList);
    break;


    // Quote command. Used a different random index picker because i dont reuse this exact code archetype yet to make it a seperate function.
    case `${data.commandArray[1].name}`:
      slashCommands.slashQuoteCommand(interaction, data.quoteArray);
    break;

    // Lists out all available quotes, "ephemeral" means only visible to the invoicer (https://discordjs.guide/slash-commands/response-methods#ephemeral-responses)
    case `${data.commandArray[2].name}`:
      slashCommands.slashQuotelistCommand(interaction, data.quoteListHeading, data.quoteList);
    break;

    // Slash command for tying up the user (analogous to !tieup)
    case `${data.commandArray[3].name}`:
      slashCommands.slashTieupCommand(interaction, data.tieupArray, invoker, userToInteract);
    break;

    // Slash command for hugging the user (analogous to !hug)
    case `${data.commandArray[4].name}`:
      slashCommands.slashHugCommand(interaction, data.hugArray, invoker, userToInteract);
    break;

    // Slash command for patting the user (analogous to !pat)
    case `${data.commandArray[5].name}`:
      slashCommands.slashPatCommand(interaction, data.patArray, invoker, userToInteract);
    break;

    // Slash command for kissing the user (analogous to !kiss)
    case `${data.commandArray[6].name}`:
      slashCommands.slashKissCommand(interaction, data.kissArray, invoker, userToInteract);
    break;

    // Slash command for slapping the user (analogous to !slap)
    case `${data.commandArray[7].name}`:
      slashCommands.slashSlapCommand(interaction, data.slapArray, invoker, userToInteract);
    break;

    // Slash command for punching the user (analogous to !punch)
    case `${data.commandArray[8].name}`:
      slashCommands.slashPunchCommand(interaction, data.punchArray, invoker, userToInteract);
    break;

    case `${data.commandArray[9].name}`:
      slashCommands.slashBonkCommand(interaction, data.bonkArray, invoker, userToInteract);
    break;

    case `${data.commandArray[10].name}`:
      slashCommands.slashLevelCommand(interaction, invoker, userToInteract);
    break;

    default: // No command case, I dont even think its needed to exist but oh well...
    break;   // As a wise man once said: "If it works, DON'T CHANGE IT!!!" :P

  }

};