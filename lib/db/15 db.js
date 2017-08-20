const movie = {
	id : '15',
	name : 'go north 2017',
	cover : '"http://www.freecovers.net/preview/0/15f3079cff710ede25bd917f7786ac20/big.jpg"',
	thumb : "http://www.freecovers.net/preview/0/15f3079cff710ede25bd917f7786ac20/big.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Go.North.2017.720p.WEB-DL.ShAaNiG.Film2Movie_BiZ.mkv'
          }],[
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Go.North.2017.720p.WEB-DL.x265.HEVC.Film2Movie_BiZ.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/go-north'
          }],[
          {
            text: 'share',
            switch_inline_query: 'go north'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
