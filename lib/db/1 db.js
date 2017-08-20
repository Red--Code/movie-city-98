const movie = {
	id : '1',
	name : 'alien covenant 2017',
	cover : '"http://uupload.ir/files/8hcq_alien_covenant.jpg"',
	thumb : "http://uupload.ir/files/8hcq_alien_covenant.jpg"
}
movie.inline={inline_keyboard: [
		[
			{
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Alien.Covenant.2017.720p.BluRay.Film2Movie_CO.mkv'
			},
			{
            text: 'Download 1080p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Alien.Covenant.2017.1080p.BluRay.MkvCage.Film2Movie_CO.mkv'
			}
		],[
          {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Alien.Covenant.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          },
			{
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Alien.Covenant.2017.BluRay.SUB.Film2Movie_CO.zip'
          }
		],[
          {
            text: 'share',
            switch_inline_query: 'alien covenant'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../examples/' + movie.id + ' db.js'