/* discord-interactions-bot/src/functions.js */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/)
// DATE:         12.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

// !!!FUNCTIONS USED IN COMMANDS!!!

const { Client, IntentsBitField, messageLink, Embed, EmbedBuilder } = require('discord.js');

function getRandomEmbedElementFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];

  const embed = new EmbedBuilder()
  .setColor('#ff6d66')
  .setImage(randomElement);

  return embed;
}

module.exports = {
  getRandomEmbedElementFromArray,
}