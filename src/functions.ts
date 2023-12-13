/* discord-interactions-bot/src/functions.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/)
// DATE:         12.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

// !!!FUNCTIONS USED IN COMMANDS!!!

import { EmbedBuilder } from 'discord.js';

function getRandomEmbedElementFromArray<T>(array: T[]): EmbedBuilder {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];

  const embed = new EmbedBuilder()
    .setColor('#ff6d66');

  if (typeof randomElement === 'string') {
    embed.setImage(randomElement);
  }

  return embed;
}

export {
  getRandomEmbedElementFromArray,
};