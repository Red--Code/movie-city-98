const movie = {
	id : '3',
	name : 'ozark',
	cover : '"https://41dcdfcd4dea0e5aba20-931851ca4d0d7cdafe33022cf8264a37.ssl.cf1.rackcdn.com/17226544_this-thursday-launder-money-for_t299a1322.jpg"',
	thumb : "https://41dcdfcd4dea0e5aba20-931851ca4d0d7cdafe33022cf8264a37.ssl.cf1.rackcdn.com/17226544_this-thursday-launder-money-for_t299a1322.jpg"
}
movie.inline={inline_keyboard: [
        [
          {
            text: 'Episode-01  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/Ozark/S01/Ozark.S01E01.720p.x265.HEVC.Film2Movie_CO.mkv'
          },
		            {
            text: 'Episode-02  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/Ozark/S01/Ozark.S01E02.720p.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Episode-03  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/Ozark/S01/Ozark.S01E03.720p.x265.HEVC.Film2Movie_CO.mkv'
          },
		            {
            text: 'Episode-04  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/Ozark/S01/Ozark.S01E04.720p.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Episode-05  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/Ozark/S01/Ozark.S01E05.720p.x265.HEVC.Film2Movie_CO.mkv'
          },
		            {
            text: 'Episode-06  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/Ozark/S01/Ozark.S01E06.720p.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Episode-07  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/Ozark/S01/Ozark.S01E07.720p.x265.HEVC.Film2Movie_CO.mkv'
          },
		            {
            text: 'Episode-08  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/Ozark/S01/Ozark.S01E08.720p.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Episode-09  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/Ozark/S01/Ozark.S01E09.720p.x265.HEVC.Film2Movie_CO.mkv'
          },
		            {
            text: 'Episode-10  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/Ozark/S01/Ozark.S01E10.720p.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		  {
			text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/ozark-first-season'
		  },
          {
            text: 'share',
            switch_inline_query: 'ozark'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'