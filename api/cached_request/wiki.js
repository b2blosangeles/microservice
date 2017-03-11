var request = pkg.request
,   cachedRequest = pkg.cachedRequest(request)
,   cacheDirectory = "/tmp/cache";
var url = req.query.url, pipe = req.query.pipe;
if (!url) {
	res.send('Miss url');
	return true;
}
cachedRequest.setCacheDirectory(cacheDirectory);
cachedRequest.setValue('ttl', 1000);

/*
cachedRequest({url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png', encoding: 'binary'}, 
	function(err, data, body) {
		res.writeHead(200, {'Content-Type': 'image/jpeg'});
		res.end(body.toString('base64'));
	}
); 

cachedRequest({url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png', encoding: 'binary'}, 
	function(err, data, body) {
		res.end(body);
		//res.end(Buffer.from(body, 'utf8'));
	}
); 
*/
if (pipe) {
	cachedRequest({url: url}).pipe(res);
} else {
	cachedRequest({url: url}, 
		function(err, data, body) {
			res.send(body);
		}
	); 	
}
