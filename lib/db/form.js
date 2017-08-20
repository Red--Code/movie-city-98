const movie = {
	id : '25',
	name : 'king',
	cover : '"cover"',
	thumb : "cover"
}


movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/81105/?'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/81105/?'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?'
          }],[
          {
            text: 'share',
            switch_inline_query: 'name'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
