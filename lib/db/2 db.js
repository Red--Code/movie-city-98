const movie = {
	id : '2',
	name : 'the circle',
	cover : '"https://cavaleria.ro/wp-content/uploads/2017/05/cover_film_the_circle.jpg"',
	thumb : "https://cavaleria.ro/wp-content/uploads/2017/05/cover_film_the_circle.jpg"
}
movie.inline={inline_keyboard: [
		[
			{
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Circle.2017.480p.BluRay.Film2Movie_CO.mkv'
			},
			{
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Circle.2017.720p.BluRay.Farsi.Dubbed.Film2Movie_CO.mkv'
			},
			{
            text: 'Download 1080p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Circle.2017.1080p.BluRay.Farsi.Dubbed.Film2Movie_CO.mkv'
			}
		],[
          {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Circle.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          },
			{
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/the-circle-2017'
          }
],[
          {
            text: 'share',
            switch_inline_query: 'the circle'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../examples/' + movie.id + ' db.js'