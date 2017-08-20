const movie = {
	id : '12',
	name : 'law of the land',
	cover : '"https://i.ytimg.com/vi/uKCDuXHmayc/maxresdefault.jpg"',
	thumb : "https://i.ytimg.com/vi/uKCDuXHmayc/maxresdefault.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Law.Of.The.Land.2017.480p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Law.Of.The.Land.2017.720p.BluRay.MkvCage.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Law.Of.The.Land.2017.1080p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Law.Of.The.Land.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/law-of-the-land-aka-armaton-maa'
          }],[
          {
            text: 'share',
            switch_inline_query: 'law of the land'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
