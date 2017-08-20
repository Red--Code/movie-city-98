const movie = {
	id : '19',
	name : 'wheeler 2017',
	cover : '"https://dyncdn.me/posters2/4/44d7399fa344ff864722d10cd0d664e12c32182d.jpg"',
	thumb : "https://dyncdn.me/posters2/4/44d7399fa344ff864722d10cd0d664e12c32182d.jpg"
}


movie.inline={inline_keyboard: [
        [
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Wheeler.2017.720p.WEB-DL.MkvCage.Film2Movie_BiZ.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/wheeler'
          }],[
          {
            text: 'share',
            switch_inline_query: 'wheeler'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
