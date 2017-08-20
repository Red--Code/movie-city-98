const movie = {
	id : '0',
	name : 'not found',
	cover : '"https://s.tmimgcdn.com/blog/wp-content/uploads/2014/03/2014.03.14-2.jpg"',
	thumb : "https://s.tmimgcdn.com/blog/wp-content/uploads/2014/03/2014.03.14-2.jpg"
}
movie.inline={inline_keyboard: [
	[{text: 'Sorry',url: 'http://uploadboy.me/ceoxn303qujr/Alien.Covenant.2017.720p.BluRay.x265.HEVC.mkv.html'},
	{text: 'share',switch_inline_query: movie.name}]
	]}
module.exports = movie
module.exports.prop = 'firstone'
module.exports.path = '../lib/db/' + movie.id + ' db.js'