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