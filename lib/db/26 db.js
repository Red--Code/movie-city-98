const movie = {
	id : '26',
	name : 'the sense of An ending 2017',
	cover : '"http://s1.firstpost.in/wp-content/uploads/2017/05/thumbnail_1488440208_9021124.png"',
	thumb : "http://s1.firstpost.in/wp-content/uploads/2017/05/thumbnail_1488440208_9021124.png"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Sense.Of.An.Ending.2017.480p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Sense.Of.An.Ending.2017.720p.BluRay.MkvCage.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Sense.Of.An.Ending.2017.1080p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Sense.Of.An.Ending.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/the-sense-of-an-ending'
          }],[
          {
            text: 'share',
            switch_inline_query: 'the sense of An ending'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
