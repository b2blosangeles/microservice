/*
var wikipedia = require(env.space_path + '/api/pkg/wikipedia/node_modules/node-wikipedia');
wikipedia.page.data("Philadelphia_Phillies", { content: true}, function(response) {
	res.send(response);
});
*/
var channel = 'niu';
var cache = pkg.cachedRequest(pkg.request);
cache.setCacheDirectory('/tmp/cache' + ((channel)?'/'+channel:''));
cache.setValue('ttl', 1000);
var url = 'https://en.wikipedia.org/w/api.php?action=parse&page=china&prop=categories|externallinks|links|text&lang=en&redirects=true&format=json';
url = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json';
cache({url: url, encoding: 'binary'}, 
	function(err, data, body) {
		if (err) {
			res.send(err.message);
		} else {
			var v = JSON.parse(body).query;
			res.send(v);
		}
		
	}
); 
/*
wikipedia.categories.tree(
	"Philadelphia_Phillies",
	function(tree) {
		res.send(tree);
		//nested data on the category page for all Phillies players
	}
);
*/
