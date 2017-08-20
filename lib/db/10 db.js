const movie = {
	id : '10',
	name : 'goon last of the enforcers',
	cover : '"https://i.ytimg.com/vi/_MKy6NgOwbE/hq720.jpg"',
	thumb : "https://i.ytimg.com/vi/_MKy6NgOwbE/hq720.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Goon.Last.Of.The.Enforcers.2017.480p.WEB-DL.Film2Movie_CO.mkv '
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Goon.Last.Of.The.Enforcers.2017.720p.WEB-DL.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Goon.Last.Of.The.Enforcers.2017.720p.WEB-DL.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/goon-last-of-the-enforcers'
          }],[
          {
            text: 'share',
            switch_inline_query: 'goon last of the enforcers'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
