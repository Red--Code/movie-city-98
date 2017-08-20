const movie = {
	id : '18',
	name : 'justice league dark 2017',
	cover : '"http://screenrant.com/wp-content/uploads/Justice-League-Dark-Movie-Starts-2016.jpg"',
	thumb : "http://screenrant.com/wp-content/uploads/Justice-League-Dark-Movie-Starts-2016.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.biz/film/Justice.League.Dark.2017.480p.BluRay.Film2Movie_BiZ.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Justice.League.Dark.2017.720p.BluRay.Film2Movie_BiZ.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Justice.League.Dark.2017.1080p.BluRay.GAN.Film2Movie_BiZ.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Justice.League.Dark.2017.720p.BluRay.x265.HEVC.PSA.Film2Movie_BiZ.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/justice-league-dark'
          }],[
          {
            text: 'share',
            switch_inline_query: 'justice league'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
