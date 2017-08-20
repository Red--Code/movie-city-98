const Telegraf = require('../')

const bot = new Telegraf(process.env.BOT_TOKEN)

// Set telegram webhook
// npm install -g localtunnel && lt --port 3000
bot.telegram.setWebhook('https://api.telegram.org/bot416337659:AAEPtdYATok1xrssZBirHVNwkoHETi-3RVQ')

// Start https webhook
// FYI: First non-file reply will be served via webhook response
bot.startWebhook('/secret-path', null, 3000)

bot.on('text', ({ reply }) => reply('Hey there!'))
