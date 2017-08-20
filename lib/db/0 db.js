const movie = {
	id : '0',
	name : 'در حال جست و جو\n\nاز پایین انتخاب نمایید.',
	cover : '"https://danielteam.ca/assets/uploads/pageuploads/searching.jpg"',
	thumb : "https://danielteam.ca/assets/uploads/pageuploads/searching.jpg"
}
movie.inline={inline_keyboard: [
	[{text: 'Sorry',url: 'http://uploadboy.me/ceoxn303qujr/Alien.Covenant.2017.720p.BluRay.x265.HEVC.mkv.html'},
	{text: 'share',switch_inline_query: movie.name}]
	]}
module.exports = movie
module.exports.prop = 'firstone'
module.exports.path = '../lib/db/' + movie.id + ' db.js'