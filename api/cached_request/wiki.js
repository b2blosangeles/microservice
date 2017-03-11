﻿var request = pkg.request
,   cachedRequest = pkg.cacheRequest
,   cacheDirectory = "/tmp/cache";

cachedRequest.setCacheDirectory(cacheDirectory);
pkg.cacheRequest.setValue('ttl', 1000);
pkg.cachedRequest({url: 'https://www.google.com'}, 
	function(err, data) {
		res.send(data.body);
	}
); 
