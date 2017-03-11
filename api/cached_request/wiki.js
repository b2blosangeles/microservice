var request = pkg.request
,   cachedRequest = pkg.cachedRequest(request)
,   cacheDirectory = "/tmp/cache";

cachedRequest.setCacheDirectory(cacheDirectory);
cacheRequest.setValue('ttl', 1000);
cachedRequest({url: 'https://www.google.com'}, 
	function(err, data) {
		res.send(data.body);
	}
); 
