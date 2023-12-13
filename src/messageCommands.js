/* discord-interactions-bot/src/messageCommands.js */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/)
// DATE:         12.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

const { getRandomEmbedElementFromArray } = require('./functions')



// ! MESSAGE COMMANDS !


// !! HELP COMMAND !!

async function helpMessageCommand(message, commandListHeading, commandList) {
  return message.channel.send({
    content: `${commandListHeading}${commandList}`,
  });
}

// !! END OF HELP COMMAND !!


// Command for printing out a random quote
async function quoteMessageCommand(message, quoteArray){
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const selectedQuote = quoteArray[randomIndex];
    return message.channel.send(selectedQuote);
}
  

// Command for printing out the list of quotes
async function quotelistMessageCommand(message, quoteListHeading, quoteList){
  return message.channel.send({
    content: `${quoteListHeading}${quoteList}`,});
}
  

// Command for tying up a user
async function tieupMessageCommand(message, tieupArray, invoker, userToInteract){
  if (invoker !== userToInteract) {
    const tieupEmbed = getRandomEmbedElementFromArray(tieupArray)
    

    return message.channel.send({
      content: `*${invoker.toString()} ties up ${userToInteract.toString()}*`,
      embeds: [tieupEmbed],
    });
  } else {
    return message.channel.send(`${userToInteract.toString()} Why do you wanna tie yourself up mate?\n||*please tie me up instead~~!*||`);
  }
}
  

// Command for hugging a user
async function hugMessageCommand(message, hugArray, invoker, userToInteract){
  const hugEmbed = getRandomEmbedElementFromArray(hugArray);

  return message.channel.send({
    content: `*${invoker.toString()} hugs ${userToInteract.toString()}*`,
    embeds: [hugEmbed],
  });
}
  

// Command for patting a user
async function patMessageCommand(message, patArray, invoker, userToInteract){
  const patEmbed = getRandomEmbedElementFromArray(patArray);

  return message.channel.send({
    content: `*${invoker.toString()} pats ${userToInteract.toString()}*`,
    embeds: [patEmbed],
  });
}
  

// Command for kissing a user
async function kissMessageCommand(message, kissArray, invoker, userToInteract){
  const kissEmbed = getRandomEmbedElementFromArray(kissArray);

  return message.channel.send({
    content: `*${invoker.toString()} kisses ${userToInteract.toString()}*`,
    embeds: [kissEmbed],
  });
}

// Command for slapping a user
async function slapMessageCommand(message, slapArray, invoker, userToInteract){
  const slapEmbed = getRandomEmbedElementFromArray(slapArray);

  message.channel.send({
    content: `*${invoker.toString()} slaps ${userToInteract.toString()}*`,
    embeds: [slapEmbed],
  });
  return;
}

// Command for punching a user
async function punchMessageCommand(message, punchArray, invoker, userToInteract){
  const punchEmbed = getRandomEmbedElementFromArray(punchArray);

  message.channel.send({
    content: `*${invoker.toString()} punches ${userToInteract.toString()}*`,
    embeds: [punchEmbed],
  });
  return;
} 

// Command for bonking a user
async function bonkMessageCommand(message, bonkArray, invoker, userToInteract){
  const bonkEmbed = getRandomEmbedElementFromArray(bonkArray);

  message.channel.send({
    content: `*${invoker.toString()} bonks ${userToInteract.toString()}*`,
    embeds: [bonkEmbed],
  });
  return;
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