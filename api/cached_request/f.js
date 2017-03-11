var cache = pkg.cachedRequest(pkg.request);
var url = req.query.url, pipe = req.query.pipe;
if (!url) {
	res.send('Miss url');
	return true;
}
cache.setCacheDirectory('/tmp/cache');
cache.setValue('ttl', 60000);

if (pipe) {
	cache({url: url}).pipe(res);
} else {
	cache({url: url}, 
		function(err, data, body) {
			if (err) {
				res.send(err.message);
			} else {
				res.send(body);
			}
			
		}
	); 	
}
