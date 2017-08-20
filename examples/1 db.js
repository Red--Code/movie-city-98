const movie = {
	id : '1',
	name : 'alien covenant',
	cover : '"http://uupload.ir/files/8hcq_alien_covenant.jpg"',
	thumb : "http://uupload.ir/files/8hcq_alien_covenant.jpg"
}
movie.inline={inline_keyboard: [
	[{text: 'Download 720p x265',url: 'http://uploadboy.me/ceoxn303qujr/Alien.Covenant.2017.720p.BluRay.x265.HEVC.mkv.html'},
	{text: 'share',switch_inline_query: movie.name}]
	]}
module.exports = movie
module.exports.prop = 'middle'
module.exports.path = '../lib/db/' + movie.id + ' db.js'