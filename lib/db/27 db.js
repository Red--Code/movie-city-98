const movie = {
	id : '27',
	name : 'open water 3 cage dive',
	cover : '"http://cdn.movieweb.com/img.news.tops/NE236dfPi3Rp49_2_b/Open-Water-3-Cage-Dive-Trailer.jpg"',
	thumb : "http://cdn.movieweb.com/img.news.tops/NE236dfPi3Rp49_2_b/Open-Water-3-Cage-Dive-Trailer.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Open.Water.3.Cage.Dive.2017.480p.WEB-DL.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Open.Water.3.Cage.Dive.2017.720p.WEB-DL.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Open.Water.3.Cage.Dive.2017.720p.WEB-DL.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/open-water-3-cage-dive-2017'
          }],[
          {
            text: 'share',
            switch_inline_query: 'open water 3'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
