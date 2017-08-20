const movie = {
	id : '14',
	name : 'i dont feel at home 2017',
	cover : '"https://art-s.nflximg.net/05f32/12b8e88e674e7b950ccf90e54596f80e4a205f32.jpg"',
	thumb : "https://art-s.nflximg.net/05f32/12b8e88e674e7b950ccf90e54596f80e4a205f32.jpg"
}


movie.inline={inline_keyboard: [
        [
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/I.Dont.Feel.At.Home.2017.720p.WEB-DL.MkvCage.Film2Movie_BiZ.mkv '
          }],[
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/I.Dont.Feel.At.Home.2017.720p.WEB-DL.x265.HEVC.Film2Movie_BiZ.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/i-dont-feel-at-home-in-this-world-anymore'
          }],[
          {
            text: 'share',
            switch_inline_query: 'i dont feel at home 2017'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
