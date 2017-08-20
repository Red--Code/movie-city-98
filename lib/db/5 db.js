const movie = {
	id : '5',
	name : 'your name',
	cover : '"http://68.media.tumblr.com/ef89005688e51800ac020ee33567d310/tumblr_ochdzu3fW41roj09io4_500.jpg"',
	thumb : "http://68.media.tumblr.com/ef89005688e51800ac020ee33567d310/tumblr_ochdzu3fW41roj09io4_500.jpg"
}
movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Your.Name.2016.480p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Your.Name.2016.720p.BluRay.MkvCage.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Your.Name.2016.1080p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Your.Name.2016.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/kimi-no-na-wa-your-name'
          }],[
          {
            text: 'share',
            switch_inline_query: 'your name'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'