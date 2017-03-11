var request = pkg.request
,   cachedRequest = pkg.cachedRequest(request)
,   cacheDirectory = "/tmp/cache";

cachedRequest.setCacheDirectory(cacheDirectory);
cachedRequest.setValue('ttl', 1000);
/*
cachedRequest({url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png', encoding: 'binary'}, 
	function(err, data, body) {
		res.writeHead(200, {'Content-Type': 'image/jpeg'});
		res.end(body.toString('base64'));
	}
); 
*/
res.writeHead(200, {'Content-Type': 'image/jpeg'});
cachedRequest({url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png', 
encoding: 'binary'}).pipe(res); 