const movie = {
	id : '25',
	name : 'king arthur legend sword',
	cover : '"http://www.joblo.com/newsimages1/king-arthur-nine-clips.jpg"',
	thumb : "http://www.joblo.com/newsimages1/king-arthur-nine-clips.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/King.Arthur.Legend.Of.The.Sword.2017.480p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/King.Arthur.Legend.Of.The.Sword.2017.720p.BluRay.NEW.Farsi.Dubbed.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/King.Arthur.Legend.Of.The.Sword.2017.1080p.BluRay.NEW.Farsi.Dubbed.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/King.Arthur.Legend.Of.The.Sword.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/king-arthur-legend-of-the-sword'
          }],[
          {
            text: 'share',
            switch_inline_query: 'king arthur legend sword'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
