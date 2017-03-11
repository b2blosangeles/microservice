var cache = pkg.cachedRequest(pkg.request);
var url = req.query.url, pipe = req.query.pipe;
if (!url) {
	res.send('Miss url');
	return true;
}
cache.setCacheDirectory('/tmp/cache');
cache.setValue('ttl', 1000);

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
	cache({url: url}).pipe(res);
} else {
	cache({url: url, encoding: 'binary'}, 
		function(err, data, body) {
			if (err) {
				res.send(err.message);
			} else {
				res.end(Buffer.from(body, 'utf8'))
			//	res.send(body);
			}
			
		}
	); 	
}
