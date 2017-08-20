const Telegraf = require('../')
const { Router, Extra, memorySession } = require('../')
const { Markup } = require('../')
const defaultMarkup = Extra
  .HTML()
  .markup((m) => m.inlineKeyboard([
    m.callbackButton('Like', 'add:1'),
	m.urlButton('DOWNLOAD', 'http://uploadboy.me/ceoxn303qujr/Alien.Covenant.2017.720p.BluRay.x265.HEVC.mkv.html')
  ], {columns: 2}))

const simpleRouter = new Router((ctx) => {
  if (!ctx.callbackQuery.data) {
    return Promise.resolve()
  }	
  const parts = ctx.callbackQuery.data.split(':')
  return Promise.resolve({
    route: parts[0],
    state: {
      amount: parseInt(parts[1], 10) || 0
    }
  })
})

const bot = new Telegraf('416337659:AAEPtdYATok1xrssZBirHVNwkoHETi-3RVQ')
bot.use(memorySession())
bot.on('callback_query', simpleRouter.middleware())

bot.command('start', (ctx) => {
  ctx.session.value = 0,
  ctx.replyWithPhoto('http://www.film2movie.co/content/uploads/Alien_Covenant.jpg')
  return ctx.reply(`Alien Covenant\n\n@CIT_tech\n\nLikes: <b>${ctx.session.value}</b>`, defaultMarkup)
})

simpleRouter.on('add', (ctx) => {
  ctx.session.value = (ctx.session.value || 0) + ctx.state.amount
  return editText(ctx)
})

simpleRouter.on('sub', (ctx) => {
  ctx.session.value = (ctx.session.value || 0) - ctx.state.amount
  return editText(ctx)
})

simpleRouter.on('clear', (ctx) => {
  ctx.session.value = 0
  return editText(ctx)
})

bot.startPolling()

function editText (ctx) {
  return ctx.session.value !== 42
    ? ctx.editMessageText(`Alien Covenant\n\n@CIT_tech\n\nLikes: <b>${ctx.session.value}</b>`, defaultMarkup).catch(() => undefined)
    : ctx.answerCallbackQuery('🎉', undefined, true).then(() => ctx.editMessageText(`🎉 ${ctx.session.value} 🎉`))
}
