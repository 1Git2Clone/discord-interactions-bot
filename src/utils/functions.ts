/* discord-interactions-bot/src/functions.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         14.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

// !!!FUNCTIONS USED IN COMMANDS!!!

import { EmbedBuilder, Message } from 'discord.js';
import { quoteArray } from '../data/data'; // getQuoteIndexMessageCommand(index: number | undefined, client: any)

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

// https://v12.discordjs.guide/miscellaneous/parsing-mention-arguments.html#implementation
function getUserFromMention(mention: string | undefined, client: any) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

function getQuoteIndexMessageCommand(message: Message, quoteArray: any[]) {
  const args = message.content.slice('!quote'.length).trim().split(/ +/);
  const firstArg = args.shift();
  const index = (firstArg ? parseInt(firstArg) : NaN) - 1;
	
  if (isNaN(index) || index < 0 || index >= quoteArray.length) {
    return;
  }

  return index;
}

export {
  getRandomEmbedElementFromArray,
  getQuoteIndexMessageCommand,
  getUserFromMention,
};
