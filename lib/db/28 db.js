const movie = {
	id : '28',
	name : 'the recall 2017',
	cover : '"http://www.scifimoviepage.com/wp-content/uploads/2016/08/recall-2-300x180.jpg"',
	thumb : "http://www.scifimoviepage.com/wp-content/uploads/2016/08/recall-2-300x180.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Recall.2017.480p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Recall.2017.720p.BluRay.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Recall.2017.1080p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/The.Recall.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/the-recall'
          }],[
          {
            text: 'share',
            switch_inline_query: 'the recall'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
