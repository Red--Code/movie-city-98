const movie = {
	id : '21',
	name : 'coin heist 2017',
	cover : '"https://art-s.nflximg.net/d93b8/ea232a2f389d6a67fbf4cd3c58c30ea4ad2d93b8.jpg"',
	thumb : "https://art-s.nflximg.net/d93b8/ea232a2f389d6a67fbf4cd3c58c30ea4ad2d93b8.jpg"
}


movie.inline={inline_keyboard: [
        [
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Coin.Heist.2017.720p.WEB-DL.MkvCage.Film2Movie_BiZ.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/coin-heist'
          }],[
          {
            text: 'share',
            switch_inline_query: 'coin heist'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
