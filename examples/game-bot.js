const Telegraf = require('../')
const { Extra, Markup } = require('../')

const gameShortName = 'your-game'
const gameUrl = 'https://your-game.tld'

const markup = Extra.markup(
  Markup.inlineKeyboard([
    Markup.gameButton('🎮 Play now!'),
    Markup.urlButton('Telegraf help', 'http://telegraf.js.org')
  ])
)

const bot = new Telegraf('416337659:AAEPtdYATok1xrssZBirHVNwkoHETi-3RVQ')
bot.command('start', ({ replyWithGame }) => replyWithGame(gameShortName))
bot.command('foo', ({ replyWithGame }) => replyWithGame(gameShortName, markup))
bot.gameQuery(({ answerGameQuery }) => answerGameQuery(gameUrl))
bot.startPolling()
