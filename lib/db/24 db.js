const movie = {
	id : '24',
	name : 'spoor 2017',
	cover : '"http://www.indiewire.com/wp-content/uploads/2017/02/spoor.jpg?w=700"',
	thumb : "http://www.indiewire.com/wp-content/uploads/2017/02/spoor.jpg?w=700"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Spoor.2017.480p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Spoor.2017.720p.BluRay.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Spoor.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/spoor-pokot'
          }],[
          {
            text: 'share',
            switch_inline_query: 'spoor'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
