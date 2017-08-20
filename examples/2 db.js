const movie = {
	id : '2',
	name : 'the circle',
	cover : '"https://cavaleria.ro/wp-content/uploads/2017/05/cover_film_the_circle.jpg"',
	thumb : "https://cavaleria.ro/wp-content/uploads/2017/05/cover_film_the_circle.jpg"
}
movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 720p x265',
            url: 'http://uploadboy.me/zlnivsdokg58/The.Circle.2017.720p.BluRay.x265.HEVC.mkv.html'
          },
          {
            text: 'share',
            switch_inline_query: 'The Circle'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'