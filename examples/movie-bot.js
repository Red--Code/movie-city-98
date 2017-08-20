const Telegraf = require('../')
const { Extra, Markup } = require('../')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var i=0;

const bot = new Telegraf('380462411:AAGoitvqD9gLdDx5pjamI489VHShrAzkEsc')
//bot.use(Telegraf.log())

bot.command('start', ({ reply }) => {
  return reply('خوش آمدید', Markup
    .keyboard([
      ['جست و جو', 'جدیدترین'],
      ['ارتباط با ما']
    ])
    .oneTime()
    .resize()
    .extra()
  )
})
bot.hears('جدیدترین', (ctx) => {
  return ctx.reply('دریافت جدیدترین فیلم ها وسریالهای روز دنیا در کانال ما\n\n@CIT_tech')
  })
bot.hears('ارتباط با ما', (ctx) => {
  return ctx.reply('راه ارتباطی ما از طریق ایمیل uma2395@gmail.com')
  })
bot.hears('جست و جو', (ctx) => {
	ctx.reply('پس از وارد کردن نام کاربری بات (@Moviecity98_bot) نام فیلم مورد نظر را وارد کنید.لازم به ذکراست که پس از وارد کردن برای اولین بار نام بات ذخیره شده و میتوانید از آن در گروه ها و چت های خصوصی نیز استفاده کنید.')
	ctx.reply('در نسخه جدید میتوانید پس از لمس گزینه زیر نام فیلم را وارد کنید',
   Markup.inlineKeyboard([
   Markup.switchToCurrentChatButton("search",'')]
	).extra() 
	)
	return console.log('search')
  })

bot.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
	module.exports.qu = inlineQuery.query;
	console.log(inlineQuery.query);
	var se = require('../lib/search-engine.js');
	var movie = se.movie;
	if(se.res)
		var res = se.res;
	else
		var res = [0];
	res.reverse();
	var unique = res.filter(function(elem, index, self) {
		return index == self.indexOf(elem);
	})
	console.log(unique);
var dbfile = 1;
var results = new Array();
//unique.reverse();
for ( i = 0 ; unique[i] != null ; i++){
results[i] = {
                type : 'article',
				id : movie[unique[i]].id,
				title : movie[unique[i]].name,
				message_text : movie[unique[i]].name +'\n\n@CIT_tech\n\n<a href='+ movie[unique[i]].cover +'>.</a>',
				reply_markup : movie[unique[i]].inline,
				parse_mode : 'html',
				description  : '@CIT_tech',
				thumb_url : movie[unique[i]].thumb
            }
}
unique.fill(0);
//results.reverse();
	return answerInlineQuery(results)
})



bot.startPolling()
