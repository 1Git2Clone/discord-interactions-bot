/* discord-interactions-bot/src/utils/calculateLevelXp.ts */

// Author:       1Kill2Steal (https://github.com/1Kill2Steal/discord-interactions-bot/)
// DATE:         14.12.2023 (DD/MM/YYYY)
// Used ChatGPT? *Sigh* yes a bit... (will use again)

module.exports = (level: number) => 100 * level || 1;