const movie = {
	id : '20',
	name : 'call of the wolf 2017',
	cover : '"https://i.ytimg.com/vi/_pp4NSt5bWs/maxresdefault.jpg"',
	thumb : "https://i.ytimg.com/vi/_pp4NSt5bWs/maxresdefault.jpg"
}


movie.inline={inline_keyboard: [
        [
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Call.Of.The.Wolf.2017.720p.WEB-DL.ShAaNiG.Film2Movie_BiZ.mkv'
          }],[
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Call.Of.The.Wolf.2017.720p.WEB-DL.x265.HEVC.Film2Movie_BiZ.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/call-of-the-wolf'
          }],[
          {
            text: 'share',
            switch_inline_query: 'call of the wolf'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
