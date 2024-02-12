# **THIS IS MY FIRST DISCORD BOT**

Planning to make even more commands in the future, feel free to tell me suggestions (discord: 1kill2steal)

## CURRENTLY AVAILABLE INTERACTION COMMANDS:
### ALL THE COMMANDS ARE DECLARED IN `src/register-commands.js` AND USED IN `src/index.js`

* **HELP COMMAND**
 * `/help`                      | ***Self-explanatory.*** Displays some text about how the bot works and all its commands.

* **QUOTES**
 * `/quote`                     | **1 OPTION:** "quote_number" *(optional)* - Uses the numbering from `/quotelist`
 * `/quotelist`                 | **8 for now**

* **USER INTERACTIONS**         // FOR ALL: **1 OPTION:** "user" *(REQUIRED)* - Specifies the user to do the action to.
 * `/tieup`
 * `/hug`
 * `/pat`
 * `/kiss`
 * `/slap`
 * `/punch`
 * `/bonk`
 * `/nom`
 * `/eat`                       // Same as `/nom`
 * `/kill`

* **FOR FUN**
 * `/drive`                     // Send a random Ryan Gosling GIF :P

* **LEVELING SYSTEM**           | The bot has a perfectly functional leveling system xp required to level is level*100 & you get 5-15xp per message every 1 minute.
 * `/level`                     // Displays your rank and level by default, you can also specify the user (optional).

Made this bot for a discord server: https://discord.gg/nopengoo


**IF** anyone wants to learn how to make a discord bot then feel free to check this [tutorial video for reference](https://www.youtube.com/watch?v=KZ3tIGHU314).
To make the bot work on your end you need to get nodejs and npm alongside some npm packages: nodemon & dotenv.
You need to make a .env file containing your bot token and then tweak some bot settings and so on.