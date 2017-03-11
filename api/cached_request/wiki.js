var request = pkg.request
,   cachedRequest = pkg.cachedRequest(request)
,   cacheDirectory = "/tmp/cache";

cachedRequest.setCacheDirectory(cacheDirectory);
cachedRequest.setValue('ttl', 1000);
cachedRequest({url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Schematic_of_lymph_node_showing_lymph_sinuses.svg/610px-Schematic_of_lymph_node_showing_lymph_sinuses.svg.png'}, 
	function(err, data) {
		res.send(data.body);
	}
); 
