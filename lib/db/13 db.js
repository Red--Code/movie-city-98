const movie = {
	id : '13',
	name : 'kill switch 2017',
	cover : '"http://www.nerdhq.com/wp-content/uploads/2017/05/kill-switch.jpg"',
	thumb : "http://www.nerdhq.com/wp-content/uploads/2017/05/kill-switch.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Kill.Switch.2017.480p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Kill.Switch.2017.720p.BluRay.Farsi.Dubbed.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Kill.Switch.2017.1080p.BluRay.Farsi.Dubbed.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Kill.Switch.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/kill-switch-2017'
          }],[
          {
            text: 'share',
            switch_inline_query: 'kill switch'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
