﻿var cache = pkg.cachedRequest(pkg.request);
var url = req.query.url, pipe = req.query.pipe, channel = req.query.channel;
if (!url) {
	res.send('Miss url');
	return true;
}
cache.setCacheDirectory('/tmp/cache' + ((channel)?'/'+channel:''));
cache.setValue('ttl', 1000);

if (pipe) {
	cache({url: url}).pipe(res);
} else {
	cache({url: url, encoding: 'binary'}, 
		function(err, data, body) {
			if (err) {
				res.send(err.message);
			} else {
				res.send(body);
			}
			
		}
	); 	
}
