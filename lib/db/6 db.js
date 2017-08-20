const movie = {
	id : '6',
	name : 'defenders',
	cover : '"http://cdn1-www.comingsoon.net/assets/uploads/2017/08/defendersposter3.jpg"',
	thumb : "http://cdn1-www.comingsoon.net/assets/uploads/2017/08/defendersposter3.jpg"
}
movie.inline={inline_keyboard: [
        [
          {
            text: 'Episode-01  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/The%20Defenders/S01/The.Defenders.S01E01.720p.x265.HEVC.Film2Movie_CO.mkv'
          },
		            {
            text: 'Episode-02  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/The%20Defenders/S01/The.Defenders.S01E02.720p.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Episode-03  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/The%20Defenders/S01/The.Defenders.S01E03.720p.x265.HEVC.Film2Movie_CO.mkv'
          },
		            {
            text: 'Episode-04  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/The%20Defenders/S01/The.Defenders.S01E04.720p.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Episode-05  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/The%20Defenders/S01/The.Defenders.S01E05.720p.x265.HEVC.Film2Movie_CO.mkv'
          },
		            {
            text: 'Episode-06  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/The%20Defenders/S01/The.Defenders.S01E06.720p.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Episode-07  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/The%20Defenders/S01/The.Defenders.S01E07.720p.x265.HEVC.Film2Movie_CO.mkv'
          },
		            {
            text: 'Episode-08  720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/serial/The%20Defenders/S01/The.Defenders.S01E08.720p.x265.HEVC.Film2Movie_CO.mkv'
          }],[
          {
            text: 'share',
            switch_inline_query: 'defenders'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'