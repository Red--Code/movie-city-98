const movie = {
	id : '23',
	name : 'the monster project 2017',
	cover : '"https://i.ytimg.com/vi/_srigz7oSWI/maxresdefault.jpg"',
	thumb : "https://i.ytimg.com/vi/_srigz7oSWI/maxresdefault.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Monster.Project.2017.480p.WEB-DL.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Monster.Project.2017.720p.WEB-DL.MkvCage.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Monster.Project.2017.720p.WEB-DL.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/the-monster-project'
          }],[
          {
            text: 'share',
            switch_inline_query: 'the monster project'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
