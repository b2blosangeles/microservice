var request = pkg.request
,   cachedRequest = pkg.cachedRequest(request)
,   cacheDirectory = "/tmp/cache";

cachedRequest.setCacheDirectory(cacheDirectory);
cachedRequest.setValue('ttl', 300000);

cachedRequest({url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png'}, 
	function(err, data, body) {
		res.end(body.toString("binary"));
	}
); 

/*
cachedRequest({url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png'}).pipe(res);
*/