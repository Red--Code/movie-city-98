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
            url: 'http://uploadboy.me/5ess5be06xpo/Ozark.S01E01.720p.x265.HEVC.mkv.html'
          },
		            {
            text: 'Episode-02  720p x265',
            url: 'http://uploadboy.me/4c2r0vid32pl/Ozark.S01E02.720p.x265.HEVC.mkv.html'
          }],[
		            {
            text: 'Episode-03  720p x265',
            url: 'http://uploadboy.me/cw9xhjbezvy7/Ozark.S01E03.720p.x265.HEVC.mkv.html'
          },
		            {
            text: 'Episode-04  720p x265',
            url: 'http://uploadboy.me/std094sd9t0m/Ozark.S01E04.720p.x265.HEVC.mkv.html'
          }],[
		            {
            text: 'Episode-05  720p x265',
            url: 'http://uploadboy.me/pl5v94lfkyq1/Ozark.S01E05.720p.x265.HEVC.mkv.html'
          },
		            {
            text: 'Episode-06  720p x265',
            url: 'http://uploadboy.me/i6ev8tzykou5/Ozark.S01E06.720p.x265.HEVC.mkv.html'
          }],[
		            {
            text: 'Episode-07  720p x265',
            url: 'http://uploadboy.me/qewoecth0v5e/Ozark.S01E07.720p.x265.HEVC.mkv.html'
          },
		            {
            text: 'Episode-08  720p x265',
            url: 'http://uploadboy.me/wg4164vpd4sf/Ozark.S01E08.720p.x265.HEVC.mkv.html'
          }],[
		            {
            text: 'Episode-09  720p x265',
            url: 'http://uploadboy.me/e7xl3aapko5y/Ozark.S01E09.480p.mkv.html'
          },
		            {
            text: 'Episode-10  720p x265',
            url: 'http://uploadboy.me/2v63vb57n8cs/Ozark.S01E10.720p.x265.HEVC.mkv.html'
          }],[
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