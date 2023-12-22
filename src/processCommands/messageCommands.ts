/* discord-interactions-bot/src/processCommands/messageCommands.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         15.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)


import { Client, Message, User } from "discord.js";
import { COMMAND_PREFIX, commandArray, greetArray } from "../data/data";
import { getUserFromMention } from "../utils/functions";
const didYouMean = require('didyoumean2').default;
const messageCommands = require('../initializeCommands/messageCommands'); 
const data = require('../data/data')


module.exports = async (client: Client, message: Message, invoker: User) => {

  if(message.author.bot) {
    return;
  }

  // Entire scope of messageCreate so i can reuse it
  
	const args = message.content.slice(COMMAND_PREFIX.length).trim().split(/ +/);
  const command = (args.shift() || '').toLowerCase(); // typescript moment. "args.shift()" may be null

  const user = getUserFromMention(args[0], client);
  const userToInteract = message.mentions.users.first() ? message.mentions.users.first() : user;

  switch (message.content.startsWith(COMMAND_PREFIX) && command) {
    // Help command. Gives a small description about the commands and lists all of them.
    case `${data.commandArray[0].name}`:
      messageCommands.helpMessageCommand(message, data.commandListHeading, data.commandList);
    break;


    // Quote command. Used a different random index picker because i dont reuse this exact code archetype yet to make it a seperate function.
    case `${data.commandArray[1].name}`:
      messageCommands.quoteMessageCommand(message, data.quoteArray);
    break;

    // Lists out all available quotes, "ephemeral" means only visible to the invoicer (https://discordjs.guide/slash-commands/response-methods#ephemeral-responses)
    case `${data.commandArray[2].name}`:
      messageCommands.quotelistMessageCommand(message, data.quoteListHeading, data.quoteList);
    break;

    // Message command for tying up the user (analogous to !tieup)
    case `${data.commandArray[3].name}`:
      messageCommands.tieupMessageCommand(message, data.tieupArray, invoker, userToInteract);
    break;

    // Message command for hugging the user (analogous to !hug)
    case `${data.commandArray[4].name}`:
      messageCommands.hugMessageCommand(message, data.hugArray, invoker, userToInteract);
    break;

    // Message command for patting the user (analogous to !pat)
    case `${data.commandArray[5].name}`:
      messageCommands.patMessageCommand(message, data.patArray, invoker, userToInteract);
    break;

    // Message command for kissing the user (analogous to !kiss)
    case `${data.commandArray[6].name}`:
      messageCommands.kissMessageCommand(message, data.kissArray, invoker, userToInteract);
    break;

    // Message command for slapping the user (analogous to !slap)
    case `${data.commandArray[7].name}`:
      messageCommands.slapMessageCommand(message, data.slapArray, invoker, userToInteract);
    break;

    // Message command for punching the user (analogous to !punch)
    case `${data.commandArray[8].name}`:
      messageCommands.punchMessageCommand(message, data.punchArray, invoker, userToInteract);
    break;

    // Message command for bonking the user (analogous to !punch)
    case `${data.commandArray[9].name}`:
      messageCommands.bonkMessageCommand(message, data.bonkArray, invoker, userToInteract);
    break;

    // Message command for displaying a random Ryan Gosling GIF.
    case `${data.commandArray[10].name}`:
      messageCommands.driveMessageCommand(message, data.driveArray);
    break;

    // Message command for nomming the user :D
    case`${data.commandArray[11].name}`:
      messageCommands.nomMessageCommand(message, data.nomArray, invoker, userToInteract);
    break;

    // Message command for eating the user (same as nom) :D
    case`${data.commandArray[12].name}`:
      messageCommands.nomMessageCommand(message, data.nomArray, invoker, userToInteract);
    break;

    // Message command for killing the user D:
    case`${data.commandArray[13].name}`:
      messageCommands.killMessageCommand(message, data.killArray, data.slapArray, invoker, userToInteract);
    break;

    // Message command for kicking the user
    case`${data.commandArray[14].name}`:
      messageCommands.kickMessageCommand(message, data.kickArray, invoker, userToInteract);
    break;

    // Message command for displaying user level
    case`${data.commandArray[15].name}`:
      messageCommands.levelMessageCommand(message, invoker, userToInteract);
    break;

    // Message command for displaying the top 9 users
    case`${data.commandArray[16].name}`:
      messageCommands.topRanksMessageCommand(message);
    break;

    // Message command for kicking the user
    case`${data.commandArray[17].name}`:
      messageCommands.buryMessageCommand(message, data.buryArray, data.selfBuryArray, invoker, userToInteract);
    break;
    case `${data.commandArray[18].name}`:
      messageCommands.driveMessageCommand(message, data.chairArray);
    break;

    // No command case, checks ${COMMAND_PREFIX}arg[0] within the letter range
    default: 
      if(command.length < 10 && command.length > 2 && message.content.startsWith(COMMAND_PREFIX)) {
        const suggestedCommand = didYouMean(command, commandArray.map(command => command.name)) // https://www.npmjs.com/package/didyoumean2
        if(!suggestedCommand) { return; }
        message.reply(`Closest match to your command is: \`${COMMAND_PREFIX}${suggestedCommand}\``)
        return;
      }
      if(args.length > 30) {
      return;
      } else {
        const customResponseArgs = message.content.trim().split(/ +/);
        const filteredGreetArray = customResponseArgs.filter(value => data.greetArray.includes(value.toLowerCase()));
        const filteredMentionArray = customResponseArgs.filter(value => data.botMentionArray.includes(value.toLowerCase()));
        if(filteredGreetArray.length > 0 && (filteredMentionArray.length > 0 || userToInteract?.id === process.env.CLIENT_ID)) {
          messageCommands.responseToGreeting(message);
          return;
        }
        const filteredLoveArray = customResponseArgs.filter(value => data.loveArray.includes(value.toLowerCase())); // i hate that ppl requested this.
        if(filteredLoveArray.length > 0 && (filteredMentionArray.length > 0 || userToInteract?.id === process.env.CLIENT_ID)) {
          messageCommands.responseToLove(message);
        }

      }
    break;
    
  }
  
};