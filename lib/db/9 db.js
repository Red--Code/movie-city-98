const movie = {
	id : '9',
	name : 'batman and harley quinn',
	cover : '"https://4.bp.blogspot.com/-8TgnKmTDbEM/WRW9eN8e-fI/AAAAAAABGj0/wdWLbox2hlsL-cByfvL3tGZSMRHKODPjgCLcB/s1600/BatAndHarley.jpg"',
	thumb : "https://4.bp.blogspot.com/-8TgnKmTDbEM/WRW9eN8e-fI/AAAAAAABGj0/wdWLbox2hlsL-cByfvL3tGZSMRHKODPjgCLcB/s1600/BatAndHarley.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Batman.And.Harley.Quinn.2017.480p.WEB-DL.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Batman.And.Harley.Quinn.2017.720p.WEB-DL.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Batman.And.Harley.Quinn.2017.720p.WEB-DL.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/batman-and-harley-quinn'
          }],[
          {
            text: 'share',
            switch_inline_query: 'batman and harley quinn'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
