var request = pkg.request
,   cachedRequest = pkg.cachedRequest(request)
,   cacheDirectory = "/tmp/cache";

cachedRequest.setCacheDirectory(cacheDirectory);
cachedRequest.setValue('ttl', 300000);

/*
cachedRequest({url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png', encoding: 'binary'}, 
	function(err, data, body) {
		res.writeHead(200, {'Content-Type': 'image/jpeg'});
		res.end(body.toString('base64'));
	}
); 
*/
cachedRequest({url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Schematic_of_lymph_node_showing_lymph_sinuses.svg/610px-Schematic_of_lymph_node_showing_lymph_sinuses.svg.png', encoding: 'binary'}, 
	function(err, data, body) {
		res.end(Buffer.from(body, 'utf8'));
	}
); 

/*
cachedRequest({url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png'}).pipe(res);
*/