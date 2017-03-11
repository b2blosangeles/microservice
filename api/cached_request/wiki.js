var request = pkg.request
,   cachedRequest = pkg.cacheRequest
,   cacheDirectory = "/tmp/cache";

//cachedRequest.setCacheDirectory(cacheDirectory);
cachedRequest.setValue('ttl', 1000);
cachedRequest({url: 'https://www.google.com'}, 
	function(err, data) {
		res.send(data.body);
	}
); 