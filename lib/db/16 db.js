const movie = {
	id : '16',
	name : 'surfs up 2 wavemania',
	cover : '"https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/surfsup2-wwesurfers.jpg"',
	thumb : "https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/surfsup2-wwesurfers.jpg"
}


movie.inline={inline_keyboard: [
        [
		            {
            text: 'Download 720p',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Surfs.Up.2.WaveMania.2017.720p.WEB-DL.ShAaNiG.Film2Movie_BiZ.mkv '
          }],[
		            {
            text: 'Download 720p x265',
            url: 'http://opizo.com/81105/?http://dl3.film2movie.co/film/Surfs.Up.2.WaveMania.2017.720p.WEB-DL.x265.HEVC.PSA.Film2Movie_BiZ.mkv '
          }],[
		            {
            text: 'زیرنویس',
            url: 'http://opizo.com/81105/?http://subf2m.co/subtitles/title?q=Surfs+Up+2+WaveMania&l='
          }],[
          {
            text: 'share',
            switch_inline_query: 'surfs Up 2 wavemania'
          }
        ]
      ]
    }
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'
