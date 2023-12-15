/* discord-interactions-bot/src/processCommands/messageCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         15.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)


import { Client, Message, User } from "discord.js";
require('../functions')
const messageCommands = require('../initializeCommands/messageCommands'); 
const data = require('../data/data')


module.exports = async (client: Client, message: Message, invoker: User) => {

  if(message.author.bot) {
    return;
  }

  // Entire scope of messageCreate so i can reuse it
  const userToInteract = message.mentions.users.first();

  // Help command. Gives a small description about the commands and lists all of them.
  if (message.content.toLowerCase() === `${data.COMMAND_PREFIX}${data.commandArray[0].name}`) {
    await messageCommands.helpMessageCommand(message, data.commandListHeading, data.commandList);
  }


  // Command for printing out a random quote
  if( (message.content.toLowerCase() === `${data.COMMAND_PREFIX}${data.commandArray[1].name}`) && message.member) {
    await messageCommands.quoteMessageCommand(message, data.quoteArray);
  }

  // Command for printing out the list of quotes
  if ( (message.content.toLowerCase() === `${data.COMMAND_PREFIX}${data.commandArray[2].name}`) && message.member) {
    await messageCommands.quotelistMessageCommand(message, data.quoteListHeading, data.quoteList);
  }

  // Command for tying up a user
  if ( (message.content.toLowerCase() === `${data.COMMAND_PREFIX}${data.commandArray[3].name}` && userToInteract) && message.member) {
    await messageCommands.tieupMessageCommand(message, data.tieupArray, invoker, userToInteract);
  }

  // Command for hugging a user
  if ( (message.content.toLowerCase() === `${data.COMMAND_PREFIX}${data.commandArray[4].name}` && userToInteract) && message.member) {
    await messageCommands.hugMessageCommand(message, data.hugArray, invoker, userToInteract);
  }

  // Command for patting a user
  if ( (message.content.toLowerCase() === `${data.COMMAND_PREFIX}${data.commandArray[5].name}` && userToInteract) && message.member) {
    await messageCommands.patMessageCommand(message, data.patArray, invoker, userToInteract);
  }

  // Command for kissing a user
  if ( (message.content.toLowerCase() === `${data.COMMAND_PREFIX}${data.commandArray[6].name}` && userToInteract) && message.member) {
    await messageCommands.kissMessageCommand(message, data.kissArray, invoker, userToInteract);
  }

  // Command for slapping a user
  if ( (message.content.toLowerCase() === `${data.COMMAND_PREFIX}${data.commandArray[7].name}` && userToInteract) && message.member) {
    await messageCommands.slapMessageCommand(message, data.slapArray, invoker, userToInteract);
  }

  // Command for punching a user
  if ( (message.content.toLowerCase() === `${data.COMMAND_PREFIX}${data.commandArray[8].name}` && userToInteract) && message.member) {
    await messageCommands.punchMessageCommand(message, data.punchArray, invoker, userToInteract);
  } 

  // Command for bonking a user
  if ( (message.content.toLowerCase() === `${data.COMMAND_PREFIX}${data.commandArray[9].name}` && userToInteract) && message.member) {
    await messageCommands.bonkMessageCommand(message, data.bonkArray, invoker, userToInteract);
  }

};
