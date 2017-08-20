const movie = {
	id : '7',
	name : 'what happened to Monday',
	cover : '"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxMDY0ODMzN15BMl5BanBnXkFtZTgwNjU1MTcwMzI@._V1_.jpg"',
	thumb : "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxMDY0ODMzN15BMl5BanBnXkFtZTgwNjU1MTcwMzI@._V1_.jpg"
}






movie.inline={inline_keyboard: [
        [
          {
            text: 'Download 480p',
            url: 'http://opizo.com/WcjrdS'
          },
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/U5FlEm'
          }],[
		            {
            text: 'Download 1080',
            url: 'http://opizo.com/RVu1Y2'
          },
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/7RVAls'
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/ZErvIc'
          }],[
          {
            text: 'share',
            switch_inline_query: 'what happened to Monday'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
