/* discord-interactions-bot/src/processCommands/messageCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         15.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)


import { Client, Message, User } from "discord.js";
import { COMMAND_PREFIX } from "../data/data";
require('../functions')
const messageCommands = require('../initializeCommands/messageCommands'); 
const data = require('../data/data')


module.exports = async (client: Client, message: Message, invoker: User) => {

  if(!message.content.startsWith(COMMAND_PREFIX) || message.author.bot) {
    return;
  }

  // Entire scope of messageCreate so i can reuse it
  const userToInteract = message.mentions.users.first();


  switch (message.content.toLowerCase()) {
// Help command. Gives a small description about the commands and lists all of them.
    case `${COMMAND_PREFIX}${data.commandArray[0].name}`:
      messageCommands.helpMessageCommand(message, data.commandListHeading, data.commandList);
    break;


    // Quote command. Used a different random index picker because i dont reuse this exact code archetype yet to make it a seperate function.
    case `${COMMAND_PREFIX}${data.commandArray[1].name}`:
      messageCommands.quoteMessageCommand(message, data.quoteArray);
    break;

    // Lists out all available quotes, "ephemeral" means only visible to the invoicer (https://discordjs.guide/slash-commands/response-methods#ephemeral-responses)
    case `${COMMAND_PREFIX}${data.commandArray[2].name}`:
      messageCommands.quotelistMessageCommand(message, data.quoteListHeading, data.quoteList);
    break;

    // Message command for tying up the user (analogous to !tieup)
    case `${COMMAND_PREFIX}${data.commandArray[3].name}`:
      messageCommands.tieupMessageCommand(message, data.tieupArray, invoker, userToInteract);
    break;

    // Message command for hugging the user (analogous to !hug)
    case `${COMMAND_PREFIX}${data.commandArray[4].name}`:
      messageCommands.hugMessageCommand(message, data.hugArray, invoker, userToInteract);
    break;

    // Message command for patting the user (analogous to !pat)
    case `${COMMAND_PREFIX}${data.commandArray[5].name}`:
      messageCommands.patMessageCommand(message, data.patArray, invoker, userToInteract);
    break;

    // Message command for kissing the user (analogous to !kiss)
    case `${COMMAND_PREFIX}${data.commandArray[6].name}`:
      messageCommands.kissMessageCommand(message, data.kissArray, invoker, userToInteract);
    break;

    // Message command for slapping the user (analogous to !slap)
    case `${COMMAND_PREFIX}${data.commandArray[7].name}`:
      messageCommands.slapMessageCommand(message, data.slapArray, invoker, userToInteract);
    break;

    // Message command for punching the user (analogous to !punch)
    case `${COMMAND_PREFIX}${data.commandArray[8].name}`:
      messageCommands.punchMessageCommand(message, data.punchArray, invoker, userToInteract);
    break;

    // Message command for bonking the user (analogous to !punch)
    case `${COMMAND_PREFIX}${data.commandArray[9].name}`:
      messageCommands.bonkMessageCommand(message, data.bonkArray, invoker, userToInteract);
    break;

    // Message command for displaying a random Ryan Gosling GIF.
    case `${COMMAND_PREFIX}${data.commandArray[10].name}`:
      messageCommands.driveMessageCommand(message, data.driveArray);
    break;

    // Message command for nomming the user :D
    case`${COMMAND_PREFIX}${data.commandArray[11].name}`:
      messageCommands.nomMessageCommand(message, data.nomArray, invoker, userToInteract);
    break;

    // Message command for eating the user (same as nom) :D
    case`${COMMAND_PREFIX}${data.commandArray[12].name}`:
      messageCommands.nomMessageCommand(message, data.nomArray, invoker, userToInteract);
    break;

    // Message command for killing the user D:
    case`${COMMAND_PREFIX}${data.commandArray[13].name}`:
      messageCommands.killMessageCommand(message, data.killArray, invoker, userToInteract);
    break;

    default: // No command case, I dont even think its needed to exist but oh well...
    break;   // As a wise man once said: "If it works, DON'T CHANGE IT!!!" :P
    
  }

};