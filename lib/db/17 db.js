const movie = {
	id : '17',
	name : 'iboy  2017',
	cover : '"https://images-na.ssl-images-amazon.com/images/M/MV5BOTk5MTBjZmEtMmMxZC00OTE4LTlkZmYtYTc3MTExZDc0ZjQwL2ltYWdlXkEyXkFqcGdeQXVyNzA4NzI2NjY@._V1_.jpg"',
	thumb : "https://images-na.ssl-images-amazon.com/images/M/MV5BOTk5MTBjZmEtMmMxZC00OTE4LTlkZmYtYTc3MTExZDc0ZjQwL2ltYWdlXkEyXkFqcGdeQXVyNzA4NzI2NjY@._V1_.jpg"
}


movie.inline={inline_keyboard: [
        [
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/iBoy.2017.720p.WEB-DL.ShAaNiG.Film2Movie_BiZ.mkv '
          }],[
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/iBoy.2017.720p.WEB-DL.x265.HEVC.PSA.Film2Movie_BiZ.mkv '
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/iboy'
          }],[
          {
            text: 'share',
            switch_inline_query: 'iboy'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
