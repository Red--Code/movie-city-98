const movie = {
	id : '8',
	name : 'bluebeard',
	cover : '"https://i.ytimg.com/vi/D929t_dWWQk/maxresdefault.jpg"',
	thumb : "https://i.ytimg.com/vi/D929t_dWWQk/maxresdefault.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Bluebeard.2017.480p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Bluebeard.2017.720p.BluRay.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Bluebeard.2017.1080p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Bluebeard.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv '
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/bluebeard'
          }],[
          {
            text: 'share',
            switch_inline_query: 'bluebeard'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
