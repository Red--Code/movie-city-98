const Telegraf = require('../')
const { Extra, Markup } = require('../')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const bot = new Telegraf('380462411:AAGoitvqD9gLdDx5pjamI489VHShrAzkEsc')
bot.use(Telegraf.log())


bot.command('start', ({ reply }) => {
  return reply('خوش آمدید', Markup
    .keyboard([
      ['جست و جو', 'جدیدترین'],
      ['درباره ما']
    ])
    .oneTime()
    .resize()
    .extra()
  )
})
bot.hears('جدیدترین', (ctx) => {
  return ctx.reply('دریافت جدیدترین فیلم ها وسریالهای روز دنیا در کانال ما\n\n@CIT_tech')
  })
bot.hears('درباره ما', (ctx) => {
  return ctx.reply('راه ارتباطی ما از طریق ایمیل uma2395@gmail.com')
  })
bot.hears('جست و جو', (ctx) => {
  return ctx.reply('پس از وارد کردن نام کاربری بات (@Moviecity98_bot) نام فیلم مورد نظر را وارد کنید.لازم به ذکراست که پس از وارد کردن برای اولین بار نام بات ذخیره شده و میتوانید از آن در گروه ها و چت های خصوصی نیز استفاده کنید.')
  })
bot.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
  const offset = parseInt(inlineQuery.offset) || 0
if (inlineQuery.query == 'alien' || inlineQuery.query == 'covenant' || inlineQuery.query == 'alien '|| inlineQuery.query == 'alien c'|| inlineQuery.query == 'alien co'|| inlineQuery.query == 'alien cov'|| inlineQuery.query == 'alien cove'|| inlineQuery.query == 'alien coven'|| inlineQuery.query == 'alien covena'|| inlineQuery.query == 'alien covenan'|| inlineQuery.query == 'alien covenant'|| inlineQuery.query == 'alien-covenant'|| inlineQuery.query == 'a' || inlineQuery.query == 'al' || inlineQuery.query == 'ali' || inlineQuery.query == 'alie' || inlineQuery.query == 'c'|| inlineQuery.query == 'co'|| inlineQuery.query == 'cov'|| inlineQuery.query == 'cove'|| inlineQuery.query == 'coven'|| inlineQuery.query == 'covena'|| inlineQuery.query == 'covenan'){
const results = new Array({
                type : 'article',
				id : '001',
				title : 'alien covenant',
				message_text : 'alien covenant',
				description  : '2017',
				thumb_url : 'http://www.film2movie.co/content/uploads/Alien_Covenant.jpg'
            })
	return answerInlineQuery(results, 1);
	}
if (inlineQuery.query == 't' || inlineQuery.query == 'th' || inlineQuery.query == 'the' || inlineQuery.query == 'the ' || inlineQuery.query == 'the c' || inlineQuery.query == 'the ci' || inlineQuery.query == 'the cir' || inlineQuery.query == 'the circ' || inlineQuery.query == 'the circl' || inlineQuery.query == 'the circle'){
const results = new Array({
                type : 'article',
				id : '002',
				title : 'The Circle',
				message_text : 'The Circle',
				description  : '2017',
				thumb_url : 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MTYyMTQ0NF5BMl5BanBnXkFtZTgwNDAwMDk3MDI@._V1_.jpg'
            })
	return answerInlineQuery(results);
	}
	if (inlineQuery.query == 'o' || inlineQuery.query == 'oz' ||inlineQuery.query == 'oza' ||inlineQuery.query == 'ozar' ||inlineQuery.query == 'ozark' ){
const results = new Array({
                type : 'article',
				id : '003',
				title : 'Ozark',
				message_text : 'Ozark',
				description  : '2017',
				thumb_url : 'https://images-na.ssl-images-amazon.com/images/M/MV5BODIyNzk5NDg5M15BMl5BanBnXkFtZTgwMTE5NjA5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg'
            })
	return answerInlineQuery(results, 1);
	}
		if (inlineQuery.query == 'g'|| inlineQuery.query == 'go'|| inlineQuery.query == 'got'|| inlineQuery.query == 'ga'|| inlineQuery.query == 'gam'|| inlineQuery.query == 'game'|| inlineQuery.query == 'game '|| inlineQuery.query == 'game o'|| inlineQuery.query == 'game of'|| inlineQuery.query == 'game of '|| inlineQuery.query == 'game of t'|| inlineQuery.query == 'game of th'|| inlineQuery.query == 'game of thr'|| inlineQuery.query == 'game of thro'|| inlineQuery.query == 'game of thron'|| inlineQuery.query == 'game of throne'|| inlineQuery.query == 'game of thrones'){
const results = new Array({
                type : 'article',
				id : '004',
				title : 'Game of thrones',
				message_text : 'got',
				description  : 'season 7',
				thumb_url : 'http://fangot.info/wp-content/uploads/2017/06/-%D9%81%D8%B5%D9%84-%D9%87%D9%81%D8%AA%D9%85-%D8%B3%D8%B1%DB%8C%D8%A7%D9%84-%DA%AF%DB%8C%D9%85-%D8%A7%D9%81-%D8%AA%D8%B1%D9%88%D9%86%D8%B2-e1497522631724.jpg'
            })
	return answerInlineQuery(results, 1);
	}
  return console.log('alldone');
})
bot.hears('alien covenant', (ctx) => {	
	ctx.replyWithPhoto('http://www.film2movie.co/content/uploads/Alien_Covenant.jpg')
	return ctx.reply('Alien Covenant   دانلود رایگان\n\n@CIT_tech',
    Markup.inlineKeyboard([
	Markup.urlButton('Download 720p x265', 'http://uploadboy.me/ceoxn303qujr/Alien.Covenant.2017.720p.BluRay.x265.HEVC.mkv.html')
    ]).extra()
)
})
bot.hears('The Circle', (ctx) => {	
	ctx.replyWithPhoto('https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MTYyMTQ0NF5BMl5BanBnXkFtZTgwNDAwMDk3MDI@._V1_.jpg')
	return ctx.reply('the Circle   	دانلود رایگان\n\n@CIT_tech',
    Markup.inlineKeyboard([
	Markup.urlButton('Download 720p x265', 'http://uploadboy.me/zlnivsdokg58/The.Circle.2017.720p.BluRay.x265.HEVC.mkv.html')
    ]).extra()
)
})
bot.hears('Ozark', (ctx) => {	
	ctx.replyWithPhoto('https://images-na.ssl-images-amazon.com/images/M/MV5BODIyNzk5NDg5M15BMl5BanBnXkFtZTgwMTE5NjA5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg')
	return ctx.reply('Ozark   	دانلود رایگان\n\n@CIT_tech',
    Markup.inlineKeyboard([
	[Markup.urlButton('Episode-01  720p x265', 'http://uploadboy.me/5ess5be06xpo/Ozark.S01E01.720p.x265.HEVC.mkv.html'),
	Markup.urlButton('Episode-02  720p x265', 'http://uploadboy.me/4c2r0vid32pl/Ozark.S01E02.720p.x265.HEVC.mkv.html')],
	[Markup.urlButton('Episode-03  720p x265', 'http://uploadboy.me/cw9xhjbezvy7/Ozark.S01E03.720p.x265.HEVC.mkv.html'),
	Markup.urlButton('Episode-04  720p x265', 'http://uploadboy.me/std094sd9t0m/Ozark.S01E04.720p.x265.HEVC.mkv.html')],
	[Markup.urlButton('Episode-05  720p x265', 'http://uploadboy.me/pl5v94lfkyq1/Ozark.S01E05.720p.x265.HEVC.mkv.html'),
	Markup.urlButton('Episode-06  720p x265', 'http://uploadboy.me/i6ev8tzykou5/Ozark.S01E06.720p.x265.HEVC.mkv.html')],
	[Markup.urlButton('Episode-07  720p x265', 'http://uploadboy.me/qewoecth0v5e/Ozark.S01E07.720p.x265.HEVC.mkv.html'),
	Markup.urlButton('Episode-08  720p x265', 'http://uploadboy.me/wg4164vpd4sf/Ozark.S01E08.720p.x265.HEVC.mkv.html')],
	[Markup.urlButton('Episode-09  720p x265', 'http://uploadboy.me/e7xl3aapko5y/Ozark.S01E09.480p.mkv.html'),
	Markup.urlButton('Episode-10  720p x265', 'http://uploadboy.me/2v63vb57n8cs/Ozark.S01E10.720p.x265.HEVC.mkv.html')]
    ]).extra()
)
})
bot.hears('got', (ctx) => {	
	ctx.replyWithPhoto('http://fangot.info/wp-content/uploads/2017/06/-%D9%81%D8%B5%D9%84-%D9%87%D9%81%D8%AA%D9%85-%D8%B3%D8%B1%DB%8C%D8%A7%D9%84-%DA%AF%DB%8C%D9%85-%D8%A7%D9%81-%D8%AA%D8%B1%D9%88%D9%86%D8%B2-e1497522631724.jpg')
	return ctx.reply('Game of thrones   	دانلود رایگان\n\n@CIT_tech',
    Markup.inlineKeyboard([
		[Markup.urlButton('S7E01  480p', 'http://trainbit.com/files/7469712884/game.of.thrones.s07e01.480p.web.x264.(fangot.info).mkv'),
	Markup.urlButton('S7E01  720p', 'http://trainbit.com/files/6369712884/Game.of.Thrones.S07E01.720p.WEBRip.480MB.MkvCage.(fangot.info).mkv'),
	Markup.urlButton('S7E01  1080p', 'http://trainbit.com/files/1849712884/Game_of_Thrones_S07E01_1080pHDTV_(fangot.info).mkv')],
	[Markup.urlButton('S7E01  720p x265', 'http://trainbit.com/files/3369712884/game.of.thrones.s07e01.720p.web.hevc.x265.(fangot.info).mkv'),
	Markup.urlButton('S7E01  1080p x265', 'http://trainbit.com/files/6124712884/Game.of.Thrones.S07E01.1080p.WEB-DL.x265.(fangot.info).mkv')],
	[Markup.urlButton('S7E01  زیرنویس', 'http://trainbit.com/files/6299712884/got.s7e1.sub.zip')],
		[Markup.urlButton('S7E02  480p', 'http://trainbit.com/files/3273812884/Game.of.Thrones.S07E02.480p.AMZN.WEBRip.___(fangot.info).mkv'),
	Markup.urlButton('S7E02  720p', 'http://trainbit.com/files/0473812884/Game.of.Thrones.S07E02.Stormborn.720p.AMZN.WEB-DL.470MB.MkvCage___(fangot.info).mkv'),
	Markup.urlButton('S7E02  1080p', 'http://trainbit.com/files/1073812884/Game.of.Thrones.S07E02.1080p.AMZN.WEB-DL.6CH.MkvCage.___(fangot.info).mkv')],
	[Markup.urlButton('S7E02  720p x265', 'http://trainbit.com/files/8583812884/Game.of.Thrones.S07E02.720p.HDTV.x265.HEVC.___(fangot.info).mkv'),
	Markup.urlButton('S7E02  1080p x265', 'http://trainbit.com/files/5893812884/Game.of.Thrones.S07E02.1080p.AMZN.WEB-DL.x265.HEVC.__(fangot.info).mkv')],
	[Markup.urlButton('S7E02  زیرنویس', 'http://trainbit.com/files/6493812884/got_s7e2_sub___(fangot.info).zip')],
		[Markup.urlButton('S7E03  480p', 'http://trainbit.com/files/0611612884/Game.of.Thrones.S07E03.AMZN.WEB-DL.480p.x264.___(fangot.info).mkv'),
	Markup.urlButton('S7E03  720p', 'http://trainbit.com/files/3211612884/Game.of.Thrones.S07E03.720p.AMZN.WEB-DL___(fangot.info).mkv'),
	Markup.urlButton('S7E03  1080p', 'http://trainbit.com/files/7621612884/Game_Of_Thrones_S07E03_1080p_WEB-DL___(fangot.info).mkv')],
	[Markup.urlButton('S7E03  720p x265', 'http://trainbit.com/files/7111612884/Game.of.Thrones.S07E03.720p.WEB.x265.HEVC.___(fangot.info).mkv'),
	Markup.urlButton('S7E03  1080p x265', 'http://trainbit.com/files/9351612884/Game_Of_Thrones_S07E03_1080p-x265_WEB-DL___(fangot.info).mkv')],
	[Markup.urlButton('S7E03  زیرنویس', 'http://trainbit.com/files/3434912884/got_s7e3_sub.rar')],
			[Markup.urlButton('S7E04  480p', 'http://dl.upload8.net/Serial/GOT/S07/Game.of.Thrones.S07E04.The.Spoils.of.War.480p.AMZN.WEB-DL.mkv'),
	Markup.urlButton('S7E04  720p', 'http://dl.upload8.net/Serial/GOT/S07/Game.of.Thrones.S07E04.The.Spoils.of.War.720p.AMZN.WEB-DL.DDP5.1.H.264-GoT.mkv'),
	Markup.urlButton('S7E04  1080p', 'http://dl.upload8.net/Serial/GOT/S07/Game.of.Thrones.S07E04.The.Spoils.of.War.1080p.AMZN.WEB-DL.DDP5.1.H.264-GoT.mkv')],
	[Markup.urlButton('S7E04  720p x265', 'http://dl.upload8.net/Serial/GOT/S07/Game.of.Thrones.S07E04.The.Spoils.of.War.720p.AMZN.WEB-DL.x265.RMTeam.mkv'),
	Markup.urlButton('S7E04  1080p کم حجم', 'http://dl.upload8.net/Serial/GOT/S07/Game.of.Thrones.S07E04.The.Spoils.of.War.1080p.AMZN.WEB-DL.mkv')],
	[Markup.urlButton('S7E04  زیرنویس', 'http://fasub.in/subtitles/game-of-thrones-seventh-season/farsi_persian/1606991')]
    ]).extra()
)
})
bot.startPolling()