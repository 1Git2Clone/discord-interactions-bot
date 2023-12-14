/* discord-interactions-bot/src/messageCreate/giveUserXp.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         14.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)


import { Client, Message } from "discord.js";
const Level = require('../models/level');
const calculateLevelXp = require('../utils/calculateLevelXp');
const cooldowns = new Set();


function getRandomXp(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = async (client: Client, message: Message) => {
  if( !message.inGuild() || message.author.bot || cooldowns.has(message.author.id) ) return;

  const xpToGive = getRandomXp(5, 15);

  const query = {
    userId: message.author.id,
    guildId: message.guild.id,
  };

  try {
    const level = await Level.findOne(query);


    if (level) {
      level.xp += xpToGive;

      if(level.xp > calculateLevelXp(level.level)) {
        level.xp = 0;
        level.level += 1;
  
        message.channel.send(`${message.member} you have leveled up to **level ${level.level}**.`);
      }

      await level.save().catch((e: any) => {
        console.log(`Error saving updated level ${e}`);
        return;
      })

      cooldowns.add(message.author.id);
      setTimeout(() => {
        cooldowns.delete(message.author.id);
      }, 60000);
    }    

    

    // if(!level)
    else {
      // create new level
      const newLevel = new Level({
        userId: message.author.id,
        guildId: message.guild.id,
        xp: xpToGive
      });

      await newLevel.save();
      setTimeout(() => {
        cooldowns.delete(message.author.id);
      }, 60000);
    }
  } catch (error) {
    console.log(`Error giving xp: ${error}`);
  }

}