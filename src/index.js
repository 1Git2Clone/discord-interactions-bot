const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online!`)
})

client.on('messageCreate', (message) => {
  console.log(`${message}`)
})

client.login(
	'MTE4Mjc1ODIwMDYyNjM4MDg2Mg.G85N0j.QY9Fi25lp2GeiZgDdvjRkEwj45M8o4eh8ozR0Y'
);
