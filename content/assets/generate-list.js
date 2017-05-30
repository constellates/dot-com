var fs = require('fs');

var projectTitle = process.argv[2];

fs.readdir('.', function (err, contents) {
	for (var i = 0; i < contents.length; i++) {
		var file = contents[i];
		console.log('![altText]({{ site.url }}/assets/' + projectTitle + '/' + file + ')\n')
	}
});