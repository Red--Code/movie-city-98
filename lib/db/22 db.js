const movie = {
	id : '22',
	name : 'going in style 2017',
	cover : '"http://cdn.empireonline.com/jpg/80/0/0/1000/563/0/north/0/0/0/0/0/t/films/353070/images/uARnuPezr7eZkOsHj2ujFQz6EKE.jpg"',
	thumb : "http://cdn.empireonline.com/jpg/80/0/0/1000/563/0/north/0/0/0/0/0/t/films/353070/images/uARnuPezr7eZkOsHj2ujFQz6EKE.jpg"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Going.in.Style.2017.480p.BluRay.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Going.in.Style.2017.720p.BluRay.Farsi.Dubbed.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Going.in.Style.2017.1080p.BluRay.Farsi.Dubbed.Film2Movie_CO.mkv'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl4.film2movie.co/film/Going.in.Style.2017.720p.BluRay.x265.HEVC.Film2Movie_CO.mkv'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/going-in-style'
          }],[
          {
            text: 'share',
            switch_inline_query: 'going in style'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
