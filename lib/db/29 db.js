const movie = {
	id : '29',
	name : 'shock wave 2017',
	cover : '"http://blog.myfatpocket.com/hazeldiary/wp-content/uploads/2017/04/SHOCK-WAVE-%E6%8B%86%E5%BC%B9%E4%B8%93%E5%AE%B6-.jpg"',
	thumb : "http://blog.myfatpocket.com/hazeldiary/wp-content/uploads/2017/04/SHOCK-WAVE-%E6%8B%86%E5%BC%B9%E4%B8%93%E5%AE%B6-.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.biz/film/Shock.Wave.2017.480p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Shock.Wave.2017.720p.BluRay.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Shock.Wave.2017.1080p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Shock.Wave.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/shock-wave'
          }],[
          {
            text: 'share',
            switch_inline_query: 'shock wave'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
